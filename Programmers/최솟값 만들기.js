function solution(A, B) {
  let answer = 0;
  let an = A.sort((a, b) => a - b);
  let bn = B.sort((a, b) => b - a);
  console.log(A, B);
  for (let i = 0; i < an.length; i++) {
    answer += an[i] * bn[i];
  }
  return answer;
}
let arr = [1, 4, 2];
let arrr = [5, 4, 4];
console.log(solution(arr, arrr));
