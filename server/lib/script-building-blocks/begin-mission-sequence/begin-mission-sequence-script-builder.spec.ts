import { beginMissionSequenceScriptBuilder } from './begin-mission-sequence-script-builder';

describe('Begin Mission Sequence', () => {
  it('begins the mission sequence', () => {
    let output = beginMissionSequenceScriptBuilder();
    expect(output).toEqual('BeginMissionSequence;');
  });
});
