'use strict';

const fs = require('fs');
const prompt = require('prompt');

prompt.start();

prompt.get(['Name','Age'], (err, res) => {
	console.log('Thanks for your input');
	console.log(res)
	const { name, age } = res;

	fs.writeFileSync('data.txt',`subject name: ${name}, age: ${age}`);
});
