const solution = (n, left, right) => {
  let answer = [];

  for (let i = left; i <= right; i++) {
    let an = parseInt(i / n);
    let ans = i % n;
    answer.push(Math.max(an, ans) + 1);
  }
  return answer;
};

let ar = 3;
let arr = 2;
let arrr = 5;
console.log(solution(ar, arr, arrr));
