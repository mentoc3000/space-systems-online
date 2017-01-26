import { beginMissionSequence } from './begin-mission-sequence-script-builder';

describe('Begin Mission Sequence', () => {
  it('begins the mission sequence', () => {
    let output = beginMissionSequence();
    expect(output).toEqual('BeginMissionSequence;');
  });
});
