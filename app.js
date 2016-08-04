'use strict';

const fs = require('fs');
const prompt = require('prompt');
const fileStructure = require('./sync.json');
const rootPath = 'root';

const generate = (struct, path) => {

	Object.keys(struct).forEach((key) => {
		const keyType = typeof struct[key];
		const nextPath = `${path}/${key}`;


		if (keyType !== 'object' && keyType !== 'string') {
			throw 'Error: not a file (string) or directory (object).';
		}

		if (keyType === 'object') {

			fs.mkdirSync(nextPath);

			return generate(struct[key], nextPath);

		} else if (keyType === 'string') {
			fs.writeFileSync(nextPath, struct[key]);
		} 
	});
}


try {
	fs.mkdirSync(rootPath);
	generate(fileStructure, `./${rootPath}`);
	console.log(`Generated file structure at ./${rootPath}`);
} catch (e) {
	throw e;
}

