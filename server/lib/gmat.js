"use strict";
var antenna_script_builder_1 = require("./script-building-blocks/antenna/antenna-script-builder");
var begin_mission_sequence_script_builder_1 = require("./script-building-blocks/begin-mission-sequence/begin-mission-sequence-script-builder");
var comment_script_builder_1 = require("./script-building-blocks/comment/comment-script-builder");
var propagate_script_builder_1 = require("./script-building-blocks/propagate/propagate-script-builder");
var spacecraft_script_builder_1 = require("./script-building-blocks/spacecraft/spacecraft-script-builder");
var childProcess = require("child_process");
var Q = require("q");
var Promise = Q.Promise;
var fs = require("fs");
var path = require("path");
function runSim(simulation) {
    var script = buildScript(simulation);
    return runScript(script);
}
exports.runSim = runSim;
function runScript(script) {
    return saveScript(script).then(runGmat);
}
exports.runScript = runScript;
// private
function saveScript(script) {
    var filename = newFileName();
    return Promise(function resolver(resolve, reject) {
        fs.writeFile(filename, script, function (err) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(filename);
            }
        });
    });
}
function newFileName() {
    var num = Date.now();
    var filename = makeFileName(num);
    return filename;
}
function makeFileName(num) {
    var dir = './scripts/';
    var base = 'sim';
    var extension = 'script';
    var filename = path.resolve(__dirname, dir + base + num + '.' + extension);
    return filename;
}
function runGmat(filename) {
    return Promise(function resolver(resolve, reject) {
        var command = buildCommand(filename);
        childProcess.exec(command, function (err, stdout, stderr) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                var output = {
                    stdout: stdout
                };
                resolve(output);
            }
            deleteFile(filename);
        });
    });
    function buildCommand(fname) {
        var gmat = path.resolve(__dirname, './gmat-dist/R2016a/bin/GmatConsole');
        var command = gmat + ' ' + fname;
        return command;
    }
}
function deleteFile(filename) {
    fs.unlink(filename, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
function buildScript(simulation) {
    var lines = [];
    if (simulation.ground) {
    }
    if (simulation.space) {
        // Spacecraft
        lines.push(comment_script_builder_1.commentSegmentScriptBuilder('Spacecrafts'));
        lines.push(buildSpacecrafts(simulation.space.crafts));
        // Hardware
        if (simulation.space.hardware) {
            lines.push(comment_script_builder_1.commentSegmentScriptBuilder('Hardware'));
            lines.push(buildSpaceHardware(simulation.space.hardware));
        }
        // Mission Sequence
        lines.push(comment_script_builder_1.commentSegmentScriptBuilder('Mission Sequence'));
        lines.push(buildMissionSequence(simulation.space.crafts));
    }
    return lines.join('\n');
}
exports.buildScript = buildScript;
function buildSpacecrafts(crafts) {
    var lines = [];
    for (var _i = 0, crafts_1 = crafts; _i < crafts_1.length; _i++) {
        var craft = crafts_1[_i];
        lines.push(comment_script_builder_1.commentLineScriptBuilder('Spacecraft: ' + craft.name));
        lines.push(spacecraft_script_builder_1.spacecraftScriptBuilder(craft.name, craft.mission.initialEpoch, craft.mission.initialOrbit));
    }
    return lines.join('\n');
}
function buildSpaceHardware(hardware) {
    var lines = [];
    // Antennas
    if (hardware.antennas) {
        for (var _i = 0, _a = hardware.antennas; _i < _a.length; _i++) {
            var antenna = _a[_i];
            lines.push(antenna_script_builder_1.antennaScriptBuilder(antenna.name));
        }
    }
    return lines.join('\n');
}
function buildMissionSequence(crafts) {
    var lines = [];
    lines.push(begin_mission_sequence_script_builder_1.beginMissionSequenceScriptBuilder());
    for (var _i = 0, crafts_2 = crafts; _i < crafts_2.length; _i++) {
        var craft = crafts_2[_i];
        for (var _a = 0, _b = craft.mission.sequence; _a < _b.length; _a++) {
            var command = _b[_a];
            if (command.type === 'propagate') {
                lines.push(propagate_script_builder_1.propagateScriptBuilder(craft.name, command.propagatorName, command.stopConditions));
            }
        }
    }
    return lines.join('\n');
}
