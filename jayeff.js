'use strict';

const fs = require('fs');
const pathExistsSync = require('path-exists').sync;

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

const createRoot = (path) => {
	if (pathExistsSync(path)) return;

	try {
		fs.mkdirSync(path);
	} catch (e) {
		throw e;
	}
}


const jsonToFileTree = (fileStructure, rootDirectory = "./") => {
	if (typeof fileStructure !== 'object') {
		throw `ERROR: fileStructure should be an object, you passed in a ${typeof fileStructure}`;
	}
	if (typeof rootDirectory !== 'string') {
		throw `ERROR: rootDirectory should be a string, you passed in a ${typeof rootDirectory}`;
	}

	createRoot(rootDirectory);

	try {
		generateTree(fileStructure, rootDirectory);
	} catch (e) {
		throw e;
	}
} 

module.exports = jsonToFileTree;
