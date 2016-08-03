'use strict';

const fs = require('fs');
const prompt = require('prompt');
const fileStructure = require('./sync.json');

const generate = (struct) => {

	Object.keys(struct).forEach((key) => {
		let keyType = typeof struct[key];

		console.log(keyType)

		if (keyType !== 'object' && keyType !== 'string') {
			throw 'Error: not a file (string) or directory (object).'
		}

		if (typeof (struct[key]) === 'object') {
			fs.mkdirSync(key);
		} else if (typeof (struct[key]) === 'string') {
			fs.writeFileSync(key);
		} 
	});
}

generate(fileStructure);