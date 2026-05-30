// Integration test - use vm to properly scope class declarations
const fs = require('fs');
const vm = require('vm');

const files = ['js/data.js', 'js/rng.js', 'js/solver.js'];
let code = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');

// Wrap in an IIFE and use var for test vars
code += `
var testResult = {};

try {
  var solver = new TimetableSolver('test123');
  var result = solver.solve();

  testResult.errors = result.errors.length;
  testResult.warnings = result.warnings.length;
  testResult.warningList = result.warnings.slice(0, 30);
  testResult.errorList = result.errors.slice(0, 10);
  testResult.classTotals = {};

  CLASSES.forEach(function(cls) {
    if (cls.fixed) return;
    var total = 0;
    DAYS.forEach(function(day) {
      var periods = day === 'Saturday' 
        ? (cls.group === '3-10' ? PERIODS_3_10_SAT : PERIODS_1_2_SAT)
        : (cls.group === '3-10' ? PERIODS_3_10 : PERIODS_1_2_11_12);
      periods.forEach(function(p) {
        if (result.timetable[cls.id] && result.timetable[cls.id][day] && result.timetable[cls.id][day][p.id]) total++;
      });
    });
    testResult.classTotals[cls.id] = total + '/' + cls.totalWeek;
  });

  var lastPids = { Monday: 'P8', Tuesday: 'P8', Wednesday: 'P8', Thursday: 'P8', Friday: 'P8', Saturday: 'P6' };
  testResult.revision = {};
  DAYS.forEach(function(day) {
    var pid = lastPids[day];
    var entry = result.timetable['10'] && result.timetable['10'][day] && result.timetable['10'][day][pid];
    testResult.revision[day] = entry ? entry.subject + ' rev=' + (entry.tags.indexOf('revision') >= 0) : 'EMPTY';
  });

  testResult.teacherConflicts = [];
  TEACHERS.forEach(function(t) {
    DAYS.forEach(function(day) {
      var seen = {};
      Object.keys(result.timetable).forEach(function(cid) {
        var dayData = result.timetable[cid][day] || {};
        Object.keys(dayData).forEach(function(pid) {
          var entry = dayData[pid];
          if (entry && entry.teacher === t.id) {
            if (seen[pid]) testResult.teacherConflicts.push(t.name + ' ' + day + ' ' + pid + ' ' + seen[pid] + '/' + cid);
            seen[pid] = cid;
          }
        });
      });
    });
  });

  ['9','10'].forEach(function(cid) {
    WEEKDAYS.forEach(function(day) {
      var hasMaths = false;
      PERIODS_3_10.forEach(function(p) {
        if (result.timetable[cid] && result.timetable[cid][day] && result.timetable[cid][day][p.id] && result.timetable[cid][day][p.id].subject === 'Maths') hasMaths = true;
      });
      if (!hasMaths) testResult.teacherConflicts.push(cid + ' missing Maths on ' + day);
    });
  });

} catch(e) {
  testResult.error = e.message;
  testResult.stack = e.stack;
}
`;

const script = new vm.Script(code);
const context = vm.createContext({ console: console, globalThis: {} });
script.runInContext(context);
console.log(JSON.stringify(context.testResult || 'testResult not defined', null, 2));
