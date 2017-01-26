export function commentLine(line: string) {
  return '% ' + line;
}

export function commentSegment(title: string) {
  let newline = '\n';
  let spacer = '%----------------------------------------------------';
  let line = '%------ ' + title;
  let array = [newline, spacer, line, spacer];
  return array.join('\n');
}
