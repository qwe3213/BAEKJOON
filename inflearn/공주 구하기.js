function solution(n, k) {
  let arr = [];
  let answer;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  while (arr.length) {
    for (let i = 1; i < k; i++) arr.push(arr.shift());
    arr.shift();
    if (arr.length === 1) {
      answer = arr.shift();
    }
  }
  console.log(answer);
}

console.log(solution(8, 3));
