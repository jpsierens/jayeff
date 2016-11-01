const fs = require('fs');
const expect = require('expect');
const effjay = require('effjay');
const jayeff = require('../jayeff');
const fileStructure = require('./tree.json');
const rootDirectory = './testDir';

describe('jayeff', function() {

    it('should create a file directory according to the JSON provided', function() {
        jayeff(fileStructure, rootDirectory);
        // get a json representation of the outputted file directory
        const json = effjay(rootDirectory, false);

        expect(fileStructure).toEqual(json);
    });
});

