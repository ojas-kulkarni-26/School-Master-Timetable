// Debug test
const fs = require('fs');
const vm = require('vm');

const files = ['js/data.js', 'js/rng.js', 'js/solver.js'];
let code = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');

code += `
var testResult = {};
try {
  var solver = new TimetableSolver('test123');
  var result = solver.solve();
  testResult.grade10WedP1 = JSON.stringify(result.timetable['10']['Wednesday']['P1']);
  testResult.grade12WedP1 = JSON.stringify(result.timetable['12']['Wednesday']['P1']);
  
  testResult.grade10Wed = {};
  PERIODS_3_10.forEach(function(p) {
    var entry = result.timetable['10']['Wednesday'][p.id];
    testResult.grade10Wed[p.id] = entry ? entry.subject + '/' + entry.teacher : 'empty';
  });
  
  testResult.rushikantWed = JSON.stringify(result.teacherSchedule['rushikant']['Wednesday']);
  
} catch(e) {
  testResult.error = e.message;
}
`;

var script = new vm.Script(code);
var context = vm.createContext({ console: console, globalThis: {} });
script.runInContext(context);
console.log(JSON.stringify(context.testResult, null, 2));
