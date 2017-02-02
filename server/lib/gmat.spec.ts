// let gmat = require('./gmat');
import {
  // runSim,
  runScript
} from './gmat';

import fs = require('fs');
import path = require('path');

describe('GMAT module tests', () => {
  let script: string;
  // let output: string;
  let expectedOutput: string;
  // let filename: string;

  describe('runScript', () => {

    let scripts = [
      'Ex_HohmannTransfer',
      'Ex_MarsBPlane',
      'Ex_GEOTransfer'
    ];

    scripts.forEach(testScript);

    function testScript(filename: string) {
      it('solve the ' + filename + ' sample', function() {
        script = readScript(filename);
        expectedOutput = readOutput(filename);
        runScript(script)
          .then(function(output: string) {
            expect(output).toEqual(expectedOutput);
          });
      });
    }

    function readScript(filename: string): string {
      let dir = path.join(__dirname, './gmat-dist/R2016a/samples/');
      let filepath = dir + filename + '.script';
      return fs.readFileSync(filepath, 'utf8');
    }
  });

  xdescribe('runSim', () => {

    it('runs basic propagation', function() {
      expect('').toEqual('COMPLETE ME');
    });
  });

  function readOutput(filename: string) {
    let dir = path.join(__dirname, 'testScripts/');
    let filepath = dir + filename + '.output';
    return fs.readFileSync(filepath, 'utf8');
  }
});
