# json-to-file-tree

> Convert json to a file tree



## Install

```
$ npm install 
```


## Usage

```js
// The json we want to convert
const fileStructure = require('./tree.json');
// Our converter
const jsonToFileTree = require('./jsonToFileTree');
// Where we want the dir tree to go
const rootDirectory = './root';

// just call the func, pass in the stuff, and optionally, a callback.
jsonToFileTree(fileStructure, rootDirectory, (err) => {
	if (err) throw err;

	console.log('success!');
});
```



json should be like this:
```json
{
	"app": {
		"index.js": "hola"
	}
}
```

If it's an object, a directory is created. If it's a string, a file is created with the string as content.

