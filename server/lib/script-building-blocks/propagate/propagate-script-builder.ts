import { validateName } from '../param-checks';

export function propagateScriptBuilder(
  propagatorName: string,
  spacecraftName: string,
  stopCondition: string | string[],
  mode = '',
  backProp = false
): string {

  let output = 'Propagate ';

  validateName(propagatorName);
  validateName(spacecraftName);

  if (mode) {
    validateName(mode);
    output = output + mode + ' ';
  }

  if (backProp) {
    output = output + 'BackProp ';
  }

  output = output + propagatorName + ' (' +
    spacecraftName + ') ';
  if (typeof stopCondition === 'string') {
    output = output + '{' + stopCondition + '}';
  } else {
    output = output + '{' + stopCondition.join(', ') + '}';
  }
  output = output + ';';

  return output;
};
