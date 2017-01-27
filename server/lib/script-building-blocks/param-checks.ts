export function isAlphanumeric(param: string): boolean {
  let matching = param.match(/^[a-z0-9]+$/i);
  return param === matching[0];
};

export function isAlpha(param: string): boolean {
  let justAlphaCharacters = param.match(/^[a-z]+$/i);
  return param.length === justAlphaCharacters.length;
};

export function isNumeric(param: string): boolean {
  let justNumericCharacters = param.match(/^[0-9]+$/);
  return param.length === justNumericCharacters.length;
};

export function startWithAlpha(param: string): boolean {
  let firstCharAlpha = param.match(/[a-z]/i);
  return firstCharAlpha.index === 0;
};

export function isValidName(name: string): boolean {
  return isAlphanumeric(name) && startWithAlpha(name);
};

export function validateName(name: string): void {
  if (!isValidName(name)) {
    throw new Error('Invalid name');
  }
};
