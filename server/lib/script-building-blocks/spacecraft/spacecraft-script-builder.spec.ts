import { spacecraftScriptBuilder } from './spacecraft-script-builder';
import {
  Epoch,
  CartesianOrbit,
  KeplerianOrbit
} from '../script-builder-interfaces';

describe('spacecraft script builder', () => {

  let epoch: Epoch;
  let cartesianOrbit: CartesianOrbit;
  let keplerianOrbit: KeplerianOrbit;
  let name: string;
  let output: string;

  function rand(): number {
    return 20 * (Math.random() - 0.5);
  }

  beforeEach(() => {
    name = 'beautifulSpaceship1';
    epoch = {
      dateFormat: 'Julian',
      epoch: '2017-01-13'
    };
    cartesianOrbit = {
      system: 'cartesian',
      x: rand(),
      y: rand(),
      z: rand(),
      vx: rand(),
      vy: rand(),
      vz: rand()
    };
    keplerianOrbit = {
      system: 'keplerian',
      sma: rand(),
      ecc: rand(),
      inc: rand(),
      raan: rand(),
      aop: rand(),
      ta: rand()
    };
  });

  it('builds a default spacecraft', () => {
    output = spacecraftScriptBuilder(name);
    expect(output).toContain('Create Spacecraft ' + name);
  });

  it('builds a spacecraft with an epoch', () => {
    output = spacecraftScriptBuilder(name, epoch);
    expect(output).toContain(name + '.DateFormat = ' + epoch.dateFormat);
    expect(output).toContain(name + '.Epoch = ' + epoch.epoch);
  });

  it('builds a spacecraft with a cartesian orbit', () => {
    output = spacecraftScriptBuilder(name, undefined, cartesianOrbit);
    expect(output).toContain(name + '.X = ' + cartesianOrbit.x);
    expect(output).toContain(name + '.Y = ' + cartesianOrbit.y);
    expect(output).toContain(name + '.Z = ' + cartesianOrbit.z);
    expect(output).toContain(name + '.VX = ' + cartesianOrbit.vx);
    expect(output).toContain(name + '.VY = ' + cartesianOrbit.vy);
    expect(output).toContain(name + '.VZ = ' + cartesianOrbit.vz);
  });

  it('builds a spacecraft with a keplerian orbit', () => {
    output = spacecraftScriptBuilder(name, undefined, keplerianOrbit);
    expect(output).toContain(name + '.SMA = ' + keplerianOrbit.sma);
    expect(output).toContain(name + '.ECC = ' + keplerianOrbit.ecc);
    expect(output).toContain(name + '.INC = ' + keplerianOrbit.inc);
    expect(output).toContain(name + '.RAAN = ' + keplerianOrbit.raan);
    expect(output).toContain(name + '.AOP = ' + keplerianOrbit.aop);
    expect(output).toContain(name + '.TA = ' + keplerianOrbit.ta);
  });

});
