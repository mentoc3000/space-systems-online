import { propagateScriptBuilder } from './propagate-script-builder';

describe('propagate', () => {

  let propagatorName: string;
  let spacecraftName: string;
  let stopCondition: string;
  let stopConditions: string[];
  let mode: string;
  let backProp: boolean;

  beforeEach(() => {
    propagatorName = 'Keplerian1';
    spacecraftName = 'satelliteOfLove89';
    stopCondition = 'periapsis';
    stopConditions = [
      'periapsis',
      'elapsedTimeSec = 1000'
    ];
    mode = 'Synchronized';
    backProp = false;
  });

  it('builds a single command', () => {
    let output = propagateScriptBuilder(propagatorName,
      spacecraftName, stopCondition);
    expect(output).toEqual('Propagate ' + propagatorName +
      ' (' + spacecraftName + ') {' + stopCondition + '};');
  });

  it('builds a Synchronized command', () => {
    let output = propagateScriptBuilder(propagatorName,
      spacecraftName, stopCondition, mode);
    expect(output).toEqual('Propagate ' + mode + ' ' + propagatorName +
      ' (' + spacecraftName + ') {' + stopCondition + '};');
  });

  it('builds a backProp command', () => {
    let output = propagateScriptBuilder(propagatorName,
      spacecraftName, stopCondition, mode, true);
    expect(output).toEqual('Propagate ' + mode + ' BackProp ' + propagatorName +
      ' (' + spacecraftName + ') {' + stopCondition + '};');
  });

  it('builds a command with multiple stop conditions', () => {
    let output = propagateScriptBuilder(propagatorName,
      spacecraftName, stopConditions);
    expect(output).toEqual('Propagate ' + propagatorName +
      ' (' + spacecraftName + ') {' + stopConditions.join(', ') + '};');
  });

  it('rejects a bad propagator name', () => {
    propagatorName = '1337 $hit';
    expect(() => {
      propagateScriptBuilder(propagatorName,
        spacecraftName, stopCondition);
    }).toThrowError();
  });

  it('rejects a bad spacecraft name', () => {
    spacecraftName = 'xxxX!Head Shot!Xxxx';
    expect(() => {
      propagateScriptBuilder(propagatorName,
        spacecraftName, stopCondition);
    }).toThrowError();
  });

});
