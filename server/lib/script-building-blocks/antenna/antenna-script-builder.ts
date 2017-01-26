export function antennaScriptBuilder(
  name: string
  ): string {
    if ( name === '') {
      return '';
    }
    return 'Create Antenna ' + name + ';';
};
