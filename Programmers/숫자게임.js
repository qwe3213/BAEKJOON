function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let a of A) {
    let max = B[B.length - 1];
    if (a < max) {
      answer++;
      B.pop();
    }
  }

  return answer;
}

let arr = [5, 1, 3, 7];
let arrr = [2, 2, 6, 8];
console.log(solution(arr, arrr));
