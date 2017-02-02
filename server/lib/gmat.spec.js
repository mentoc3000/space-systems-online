"use strict";
// let gmat = require('./gmat');
var gmat_1 = require("./gmat");
var fs = require("fs");
var path = require("path");
describe('GMAT module tests', function () {
    var script;
    // let output: string;
    var expectedOutput;
    // let filename: string;
    describe('runScript', function () {
        var scripts = [
            'Ex_HohmannTransfer',
            'Ex_MarsBPlane',
            'Ex_GEOTransfer'
        ];
        scripts.forEach(testScript);
        function testScript(filename) {
            it('solve the ' + filename + ' sample', function () {
                script = readScript(filename);
                expectedOutput = readOutput(filename);
                gmat_1.runScript(script)
                    .then(function (output) {
                    expect(output).toEqual(expectedOutput);
                });
            });
        }
        function readScript(filename) {
            var dir = path.join(__dirname, './gmat-dist/R2016a/samples/');
            var filepath = dir + filename + '.script';
            return fs.readFileSync(filepath, 'utf8');
        }
    });
    describe('runSim', function () {
        it('runs basic propagation', function () {
        });
    });
    function readOutput(filename) {
        var dir = path.join(__dirname, 'testScripts/');
        var filepath = dir + filename + '.output';
        return fs.readFileSync(filepath, 'utf8');
    }
});
