function processLogs(logs, threshold) {
const logsLength = logs.length;
let values = [];
let idMap = {};
var count;
for (var i = 0; i < logsLength; i++) {
var log = logs[i].split(' ');
if (log[0] == log[1]) {
idMap[log[0]] ? idMap[log[0]]++ : idMap[log[0]] = 1;
} else {
idMap[log[0]] ? idMap[log[0]]++ : idMap[log[0]] = 1;
idMap[log[1]] ? idMap[log[1]]++ : idMap[log[1]] = 1;
}
}

for(var id in idMap) {
if(idMap[id] >= threshold) values.push(id);
}

return values.sort();
}