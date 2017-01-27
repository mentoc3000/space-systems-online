export function commentLineScriptBuilder(line: string) {
  return '% ' + line;
}

export function commentSegmentScriptBuilder(title: string) {
  let newline = '\n';
  let spacer = '%----------------------------------------------------';
  let line = '%------ ' + title;
  let array = [newline, spacer, line, spacer];
  return array.join('\n');
}
