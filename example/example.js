// The json we want to convert
const fileStructure = require('./tree.json');
// Our converter
const jayeff = require('../jayeff');
// Where we want the dir tree to go
const rootDirectory = './';

// just call the func, pass in the stuff.
// rootDir is optional, defaults to the current dir.
jayeff(fileStructure, rootDirectory);

console.log('Done');

