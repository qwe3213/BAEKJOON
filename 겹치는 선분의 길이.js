function solution(lines) {
  lines = lines.map((line) => [line[0] + 100, line[1] + 100]);
  let arr = [];
  for (let i = 0; i <= 200; i++) {
    arr.push(0);
  }
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line[0] > line[1]) {
      line = [line[1], line[0]];
    }
    for (let j = line[0]; j < line[1]; j++) {
      arr[j] += 1;
    }
  }
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) {
      answer++;
    }
  }
  return answer;
}
