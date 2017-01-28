export interface Simulation {
  // ground?: GroundElements;
  space: SpaceElements;
}

export interface GroundElements {
  // celestialBody?: string;
  // groundStations?: GroundStation[];
  hardware?: GroundHardware;
}

// export interface GroundStation {
//   latitude: number;
//   longitude: number;
//   transmitter: string;
//   receiver: string;
// }

export interface GroundHardware {
  // transmitters: Transmitter[];
  // receivers: Receiver[];
  antennas: Antenna[];
}

// export interface Transmitter {
//   name: string;
// }

// export interface Receiver {
//   name: string;
}

export interface Antenna {
  name: string;
}

export interface SpaceElements {
  // hardware?: SpaceHardware;
  crafts: Craft[];
}

// export interface SpaceHardware {
//   transmitters: Transmitter[];
//   receivers: Receiver[];
//   antennas: Antenna[];
//   thrusters: Thruster[];
//   tanks: Tank[];
//   solarPower: SolarPower[];
//   nuclearPower: NuclearPower[];
//   navigation: Navigation[];
// }

// export interface Thruster {
//   name: string;
// }

// export interface Tank {
//   name: string;
// }

// export interface SolarPower {
//   name: string;
// }

// export interface NuclearPower {
//   name: string;
// }

// export interface Navigation {
//   name: string;
// }

export interface Craft {
  name: string;
  // attitude: Attitude;
  // ballistics: Ballistics;
  hardware: string[];
  mission: Mission;
}

export interface Mission {
  initialOrbit: Orbit;
  initialEpoch: Epoch;
  sequence: Command[];
}

export interface Epoch {
  dateFormat: string;
  epoch: string;
}

export interface Orbit {
  system: string;
}

export interface CartesianOrbit extends Orbit {
  system: 'cartesian';
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export interface KeplerianOrbit extends Orbit {
  system: 'keplerian';
  sma: number;
  ecc: number;
  inc: number;
  raan: number;
  aop: number;
  ta: number;
}

export interface Command {
  type: string;
}

export interface Propagate extends Command {
  propagator: string;
  stopConditions: string[];
}
