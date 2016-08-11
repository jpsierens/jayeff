# jayeff

> Convert json to a file tree



## Install

```
$ npm i jayeff
```


## Usage

```js
// Our converter
const jayeff = require('jayeff');
// The json we want to convert
const fileStructure = require('./tree.json');
// Where we want the dir tree to go
const rootDirectory = './';

// just call the func, pass in the stuff.
// rootDirectory is optional, defaults to the current dir.
jayeff(fileStructure, rootDirectory);

console.log('Done');
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

