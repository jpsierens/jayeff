// The json we want to convert
const fileStructure = require('./tree.json');
// Our converter
const jsonToFileTree = require('../jsonToFileTree');
// Where we want the dir tree to go
const rootDirectory = './root';

// just call the func, pass in the stuff, and optionally, a callback.
jsonToFileTree(fileStructure, rootDirectory, (err) => {
	if (err) throw err;

	console.log('success!');
});

