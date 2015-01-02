var toMarkdown = require('to-markdown').toMarkdown;
var fs = require('fs');

var content = fs.readFileSync('test.html', 'utf8');
console.log(toMarkdown(content));