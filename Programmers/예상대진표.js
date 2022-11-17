function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
let arr = 8;
let arrr = 4;
let arrrr = 7;

console.log(solution(arr, arrr, arrrr));
