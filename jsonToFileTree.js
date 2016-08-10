'use strict';

const fs = require('fs');

const generateTree = (struct, path) => {

	Object.keys(struct).forEach((key) => {
		const keyType = typeof struct[key];
		const nextPath = `${path}/${key}`;


		if (keyType !== 'object' && keyType !== 'string') {
			throw 'Error: not a file (string) or directory (object).';
		}

		if (keyType === 'object') {

			fs.mkdirSync(nextPath);

			return generateTree(struct[key], nextPath);

		} else if (keyType === 'string') {
			fs.writeFileSync(nextPath, struct[key]);
		} 
	});
}


const jsonToFileTree = (fileStructure, rootDirectory, cb) => {
	if (typeof fileStructure !== 'object') {
		throw `ERROR: fileStructure should be an object, you passed in a ${typeof fileStructure}`;
	}
	if (typeof rootDirectory !== 'string') {
		throw `ERROR: rootDirectory should be a string, you passed in a ${typeof rootDirectory}`;
	}
	if (typeof cb !== 'function') {
		throw `ERROR: callback must be a function, you passed in a ${typeof cb}`;
	}

	try {
		fs.mkdirSync(rootDirectory);
		generateTree(fileStructure, rootDirectory);
		if (cb) cb(null);
	} catch (e) {
		if (cb) cb(e);
	}
} 

module.exports = jsonToFileTree;
