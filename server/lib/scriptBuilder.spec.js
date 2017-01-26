'use strict';

var scriptBuilder = require('./scriptBuilder');

function baseSimulation() {

   var simulation = {
      simulator: {
      },
      ground: {
         celestialBody: 'Earth',
         groundStations: [
            {
               name: 'station1',
               latitude: 10,
               longitude: -20,
               transmitter: 'transmitter1', //name
               receiver: 'receiver1' //name
            },
            {
               name: 'station2',
               latitude: -34,
               longitude: 78,
               transmitter: 'transmitter2', //name
               receiver: 'receiver2' //name
            }
         ],
         /*
         hardware: { // all hardware must be named
            transmitter: [
               {
               }
            ],
            receiver: [
               {
               }
            ],
            antenna: [
               {
               }
            ]
         }
         */
      },
      space: {
         hardware: { // all hardware must be named
            /*
            transmitter: [
               {
               }
            ],
            */
            /*
            receiver: [
               {
               }
            ],
            */
            antenna: [
               {
                  name: 'satAntenna1'
               }
            ],
            /*
            thruster: [
               {
               }
            ],
            */
            /*
            tank: [
               {
               }
            ],
            */
            /*
            solarPower: [
               {
               }
            ],
            */
            /*
            nuclearPower: [
               {
               }
            ],
            */
            /*
            navigation: [
               {
               }
            ]
            */
         },
         craft: {
            name: 'sat1',
            attitude: {
            },
            ballistics: {
            },
            hardware: [
            ],
            mission: {
               initial: {
                  orbit: {
                     X: 1000,
                     Y: 82041,
                     Z: 1842.132,
                     VX: -892.12,
                     VY: -394.15,
                     VZ: 834.87,
                     SMA: 4.12,
                     ECC: -91.2,
                     INC: 0.42341,
                     RAAN: -94.1112,
                     AOP: 0.000391,
                     TA: 81.213,
                     RadPer: -991.231,
                     RadApo: 8.12874
                  },
                  epoch: {
                     DateFormat: 'dateFormat',
                     Epoch: 'epoch',
                  }
               },
               sequence: [
                  {
                     type: 'propagate',
                     propagatorName: 'propagatorName',
                     spacecraftName: 'satellite',
                     stopCondition: [
                        'sat.TA = 90',
                        'sat.Apoapsis'
                     ]
                  }
               ]
            }
         }
      }
   };
   return simulation;
}

describe('Line Builder Tests', function() {
   var simulation;

   describe('antenna',function() {
      beforeEach(function() {
         simulation = baseSimulation();
      });

      it('outputs create antenna line', function() {
         var output = scriptBuilder.block.antenna(simulation.space.hardware.antenna);
         expect(output).toEqual('Create Antenna ' + simulation.space.hardware.antenna.name + ';');
      });

      it('outputs empty string if antenna is empty', function () {
         var output = scriptBuilder.block.antenna({});
         expect(output).toEqual('');
      });
   });

   xdescribe('array', function() {
   });

   xdescribe('baryCenter',function() {
   });

   xdescribe('batchEstimatorInv',function() {
   });

   xdescribe('celestialBody',function() {
   });

   xdescribe('chemicalTank',function() {
   });

   xdescribe('chemicalThruster',function() {
   });

   xdescribe('coordinateSystem',function() {
   });

   xdescribe('contactLocator',function() {
   });

   xdescribe('differentialCorrector',function() {
   });

   xdescribe('electricTank',function() {
   });

   xdescribe('electricThruster',function() {
   });

   xdescribe('eclipseLocator',function() {
   });

   xdescribe('ephemerisFile',function() {
   });

   xdescribe('errorModel',function() {
   });

   xdescribe('fileInterface',function() {
   });

   xdescribe('finiteBurn',function() {
   });

   xdescribe('fminconOptimizer',function() {
   });

   xdescribe('formation',function() {
   });

   xdescribe('gmatFunction',function() {
   });

   xdescribe('groundStation',function() {
   });

   xdescribe('impulsiveBurn',function() {
   });

   xdescribe('liberationPoint',function() {
   });

   xdescribe('matlabFunction',function() {
   });

   xdescribe('nuclearPowerSystem',function() {
   });

   xdescribe('propagator',function() {
   });

   xdescribe('receiver',function() {
   });

   xdescribe('reportFile',function() {
   });

   xdescribe('simulator',function() {
   });

   xdescribe('snopt',function() {
   });

   xdescribe('solarPowerSystem',function() {
   });

   xdescribe('solarSystem',function() {
   });

   describe('spacecraft',function() {
      var spacecraftData, output, regex;
      beforeEach(function() {
         simulation = baseSimulation();
         spacecraftData = simulation.space.craft;
         output = scriptBuilder.block.spacecraft(spacecraftData);
      });

      it('Creates the spacecraft', function() {
         regex = new RegExp('^Create Spacecraft ' + spacecraftData.name + ';');
         expect(output).toMatch(regex);
      });

      for (var key in spacecraftData) {
         if (spacecraftData.hasOwnProperty(key) & key !== 'name') {
            keyTest(spacecraftData.name, key, spacecraftData[key]);
         }
      }

      function keyTest(name, key, val) {
         it('adds ' + key + ' property', function(){
            regex = new RegExp("\\n" + name + '\\.' + key + ' \\= ' + val + ';($|\\n)');
            expect(output).toMatch(regex);
         });
      }

      it('outputs an empty string when spacecraft is blank', function() {
         output = scriptBuilder.block.spacecraft({});
         expect(output).toEqual('');
      });

   });

   xdescribe('statisticsAcceptFilter',function() {
   });

   xdescribe('statisticsRejectFilter',function() {
   });

   xdescribe('string',function() {
   });

   xdescribe('trackingFileSet',function() {
   });

   xdescribe('transmitter',function() {
   });

   xdescribe('transponder',function() {
   });

   xdescribe('variable',function() {
   });

   xdescribe('vf13ad',function() {
   });

   xdescribe('achieve',function() {
   });

   xdescribe('assignment',function() {
   });

   xdescribe('beginFiniteBurn',function() {
   });

   describe('beginMissionSequence',function() {
      it('creates command', function(){
         var output = scriptBuilder.block.beginMissionSequence();
         expect(output).toEqual('BeginMissionSequence;');
      });
   });

   xdescribe('beginScript',function() {
   });

   xdescribe('callGmatFunction',function() {
   });

   xdescribe('callMatlabFunction',function() {
   });

   xdescribe('callPythonFunction',function() {
   });

   xdescribe('endFiniteBurn',function() {
   });

   xdescribe('findEvents',function() {
   });

   xdescribe('for',function() {
   });

   xdescribe('getEphemStates',function() {
   });

   xdescribe('global',function() {
   });

   xdescribe('if',function() {
   });

   xdescribe('maneuver',function() {
   });

   xdescribe('markPoint',function() {
   });

   xdescribe('minimize',function() {
   });

   xdescribe('nonlinearConstraint',function() {
   });

   xdescribe('optimize',function() {
   });

   xdescribe('penUpPenDown',function() {
   });

   describe('propagate',function() {
      var propagateData, output;
      beforeEach(function() {
         simulation = baseSimulation();
         propagateData = simulation.space.craft.mission.sequence[0];
         output = scriptBuilder.block.propagate(propagateData);
      });

      it('builds script line', function() {
         var expected = 'Propagate ' + propagateData.propagatorName +
            '(' + propagateData.spacecraftName + ') ' +
            '{' + propagateData.stopCondition.join(', ') + '};';
         expect(output).toEqual(expected);
      });
   });

   xdescribe('report',function() {
   });

   xdescribe('runEstimator',function() {
   });

   xdescribe('runSimulator',function() {
   });

   xdescribe('set',function() {
   });

   xdescribe('stop',function() {
   });

   xdescribe('target',function() {
   });

   xdescribe('toggle',function() {
   });

   xdescribe('vary',function() {
   });

   xdescribe('while',function() {
   });

   xdescribe('write',function() {
   });
});

describe('Script Builder Tests', function() {
   describe('Spacecraft builder', function() {

      it('adds spacecraft lines', function() {
         var fullSim = baseSimulation();
         var spacecraftData = fullSim.space.craft;
         var output = scriptBuilder.buildSpacecraft(spacecraftData);
         var spacecraftOutput = scriptBuilder.buildSpacecraft(spacecraftData);
         expect(output).toContain(spacecraftOutput);
      });
   });

   describe('Hardware builder', function() {

      it('builds empty string for empty object', function() {
         var output = scriptBuilder.buildHardware({});
         expect(output).toEqual('');
      });

      it('adds antenna lines', function() {
         var fullSim = baseSimulation();
         var hardwareData = fullSim.space.hardware;
         var output = scriptBuilder.buildHardware(hardwareData);
         var antennaOutput = scriptBuilder.block.antenna(hardwareData.antenna[0]);
         expect(output).toContain(antennaOutput);
      });
   });

   describe('Mission Sequence builder', function() {

      it('builds empty string for empty object', function() {
         var output = scriptBuilder.buildMissionSequence({});
         expect(output).toEqual('');
      });

      it('begins the mission sequence', function() {
         var fullSim = baseSimulation();
         var sequenceData = fullSim.space.craft.mission.sequence;
         var output = scriptBuilder.buildMissionSequence(sequenceData);
         expect(output).toContain(scriptBuilder.block.beginMissionSequence());
      });

      it('contains the propagate lines', function() {
         var fullSim = baseSimulation();
         var sequenceData = fullSim.space.craft.mission.sequence;
         var output = scriptBuilder.buildMissionSequence(sequenceData);
         expect(output).toContain(scriptBuilder.block.propagate(sequenceData[0]));
      });
   });
});
