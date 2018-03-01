var fs = require('fs')
var util = require('util')
var logFile = fs.createWriteStream(__dirname + '/debug.log', {flags: 'w'})

console.log = function (d) {
  logFile.write(util.format(d) + '\n')
}

var i = 0
var log = function () {
  console.log('foo bar' + i)
  i++
}

setInterval(log, 2000)
