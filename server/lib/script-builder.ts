import {
  Simulation,
  SpaceHardware,
  Craft
} from './simulation-interfaces';

export function buildScript(simulation: Simulation): string {
  let lines: string[] = [];

  if (simulation.ground) {
    // Ground

  }


  if (simulation.space) {

    // Spacecraft
    let crafts = simulation.space.crafts;
    for (let i = 0; i < crafts.length; i++) {
      lines.push(buildSpacecraft(crafts[i]));
    }

    // Hardware
    if (simulation.space.hardware) {
      lines.push(buildHardware(simulation.space.hardware));
    }

    // Mission Sequence
    lines.push(buildMissionSequence(crafts));

  }

  return lines.join('\n');
}

function buildSpacecraft(spacecraftData: Craft) {
  let lines: string[] = [];


  return lines.join('\n');
}

function buildHardware(hardwareData: SpaceHardware) {
  let lines: string[] = [];

  return lines.join('\n');
}

function buildMissionSequence(crafts: Craft[]) {
  let lines = [];

  lines.push(commentSegment('Mission Sequence'));
  lines.push(beginMissionSequence());




  return lines.join('\n');
}
