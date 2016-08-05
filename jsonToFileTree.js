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

	try {
		fs.mkdirSync(rootDirectory);
		generateTree(fileStructure, rootDirectory);
		if (cb) cb(null);
	} catch (e) {
		if (cb) cb(e);
	}
} 

module.exports = jsonToFileTree;
