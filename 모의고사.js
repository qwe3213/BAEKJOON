function solution(answers) {
  var answer = [];
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % 5]) {
      count[0]++;
    }
    if (answers[i] === b[i % 8]) {
      count[1]++;
    }
    if (answers[i] === c[i % 10]) {
      count[2]++;
    }
  }
  const maxCount = Math.max.apply(null, count);

  for (let j = 0; j < 3; j++) {
    if (count[j] === maxCount) {
      answer.push(j + 1);
    }
  }
  return answer;
}
