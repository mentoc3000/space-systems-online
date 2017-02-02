
import {
  Simulation,
  // SpaceElements,
  SpaceHardware,
  Craft
} from './simulation-interfaces';
import { antennaScriptBuilder } from './script-building-blocks/antenna/antenna-script-builder';
import { beginMissionSequenceScriptBuilder } from './script-building-blocks/begin-mission-sequence/begin-mission-sequence-script-builder';
import { commentSegmentScriptBuilder, commentLineScriptBuilder } from './script-building-blocks/comment/comment-script-builder';
import { propagateScriptBuilder } from './script-building-blocks/propagate/propagate-script-builder';
import { spacecraftScriptBuilder } from './script-building-blocks/spacecraft/spacecraft-script-builder';

import childProcess = require('child_process');
import Q = require('q');
import Promise = Q.Promise;
import fs = require('fs');
import path = require('path');

export function runSim(simulation: Simulation): Promise<string> {
  let script = buildScript(simulation);
  return runScript(script);
}

export function runScript(script: string): Promise<any> {
  return saveScript(script).then(runGmat);
}
// private
function saveScript(script: string): Promise<any> {
  let filename = newFileName();
  return Promise(function resolver(resolve, reject) {
    fs.writeFile(filename, script, function(err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(filename);
      }
    });
  });
}

function newFileName(): string {
  let num = Date.now();
  let filename = makeFileName(num);
  return filename;
}

function makeFileName(num: number): string {
  let dir = './scripts/';
  let base = 'sim';
  let extension = 'script';
  let filename = path.resolve(__dirname, dir + base + num + '.' + extension);
  return filename;
}

function runGmat(filename: string): Promise<any> {
  return Promise(function resolver(resolve, reject) {
    let command = buildCommand(filename);
    childProcess.exec(command, function(err, stdout, stderr) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        let output = {
          stdout: stdout
        };
        resolve(output);
      }
      deleteFile(filename);
    });
  });

  function buildCommand(fname: string): string {
    let gmat = path.resolve(__dirname, './gmat-dist/R2016a/bin/GmatConsole');
    let command = gmat + ' ' + fname;
    return command;
  }
}

function deleteFile(filename: string): void {
  fs.unlink(filename, function(err) {
    if (err) {
      console.log(err);
    }
  });
}




export function buildScript(simulation: Simulation): string {
  let lines: string[] = [];

  if (simulation.ground) {
    // Ground

  }


  if (simulation.space) {

    // Spacecraft
    lines.push(commentSegmentScriptBuilder('Spacecrafts'));
    lines.push(buildSpacecrafts(simulation.space.crafts));

    // Hardware
    if (simulation.space.hardware) {
      lines.push(commentSegmentScriptBuilder('Hardware'));
      lines.push(buildSpaceHardware(simulation.space.hardware));
    }

    // Mission Sequence
    lines.push(commentSegmentScriptBuilder('Mission Sequence'));
    lines.push(buildMissionSequence(simulation.space.crafts));
  }

  return lines.join('\n');
}




function buildSpacecrafts(crafts: Craft[]): string {
  let lines: string[] = [];

  for (let craft of crafts) {
    lines.push(commentLineScriptBuilder('Spacecraft: ' + craft.name));
    lines.push(spacecraftScriptBuilder(
      craft.name,
      craft.mission.initialEpoch,
      craft.mission.initialOrbit
    ));
  }

  return lines.join('\n');
}




function buildSpaceHardware(hardware: SpaceHardware): string {
  let lines: string[] = [];

  // Antennas
  if (hardware.antennas) {
    for (let antenna of hardware.antennas) {
      lines.push(antennaScriptBuilder(antenna.name));
    }
  }



  return lines.join('\n');
}




function buildMissionSequence(crafts: Craft[]): string {
  let lines: string[] = [];

  lines.push(beginMissionSequenceScriptBuilder());
  for (let craft of crafts) {
    for (let command of craft.mission.sequence) {
      if (command.type === 'propagate') {
        lines.push(propagateScriptBuilder(
          craft.name,
          command.propagatorName,
          command.stopConditions
        ));
      }
    }
  }

  return lines.join('\n');
}
