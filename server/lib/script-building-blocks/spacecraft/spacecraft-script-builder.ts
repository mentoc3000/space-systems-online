import {
  Epoch,
  CartesianOrbit,
  KeplerianOrbit
} from '../../simulation-interfaces';


export function spacecraftScriptBuilder(
  name: string,
  epoch?: Epoch,
  orbit?: CartesianOrbit | KeplerianOrbit
): string {

  let lines = [];

  // name
  lines.push('Create Spacecraft ' + name + ';');

  // epoch

  if (epoch) {
    lines.push(name + '.DateFormat = ' + epoch.dateFormat + ';');
    lines.push(name + '.Epoch = ' + epoch.epoch + ';');
  }

  // initial orbit
  if (orbit) {

    if (orbit.system === 'cartesian') {

      if (orbit.x) {
        lines.push(name + '.X = ' + orbit.x + ';');
      }

      if (orbit.y) {
        lines.push(name + '.Y = ' + orbit.y + ';');
      }

      if (orbit.z) {
        lines.push(name + '.Z = ' + orbit.z + ';');
      }

      if (orbit.vx) {
        lines.push(name + '.VX = ' + orbit.vx + ';');
      }

      if (orbit.vy) {
        lines.push(name + '.VY = ' + orbit.vy + ';');
      }

      if (orbit.vz) {
        lines.push(name + '.VZ = ' + orbit.vz + ';');
      }

    } else if (orbit.system === 'keplerian') {

      if (orbit.sma) {
        lines.push(name + '.SMA = ' + orbit.sma + ';');
      }

      if (orbit.ecc) {
        lines.push(name + '.ECC = ' + orbit.ecc + ';');
      }

      if (orbit.inc) {
        lines.push(name + '.INC = ' + orbit.inc + ';');
      }

      if (orbit.raan) {
        lines.push(name + '.RAAN = ' + orbit.raan + ';');
      }

      if (orbit.aop) {
        lines.push(name + '.AOP = ' + orbit.aop + ';');
      }

      if (orbit.ta) {
        lines.push(name + '.TA = ' + orbit.ta + ';');
      }
    }

  }

  return lines.join('\n');
};

