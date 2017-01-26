import { antennaScriptBuilder } from './antenna-script-builder';

describe('antenna', () => {

  let name: string;
  beforeEach(() => {
    name = 'Greg the antenna1234';
  });

  it('outputs create antenna line', () => {
    let output = antennaScriptBuilder(name);
    expect(output).toEqual('Create Antenna ' + name + ';');
  });

  it('outputs empty string if antenna is empty', () => {
    let output = antennaScriptBuilder('');
    expect(output).toEqual('');
  });

});
