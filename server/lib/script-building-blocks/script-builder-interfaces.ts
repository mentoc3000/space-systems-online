export interface Epoch {
  dateFormat: string;
  epoch: string;
}

export interface CartesianOrbit {
  system: 'cartesian';
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

export interface KeplerianOrbit {
  system: 'keplerian';
  sma: number;
  ecc: number;
  inc: number;
  raan: number;
  aop: number;
  ta: number;
}
