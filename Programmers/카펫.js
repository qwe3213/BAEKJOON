function solution(brown, yellow) {
  let answer = [];
  for (let i = 3; i <= (brown + yellow) / i; i++) {
    let x = Math.floor((brown + yellow) / i);
    if ((x - 2) * (i - 2) === yellow) {
      return [x, i];
    }
  }
}
let arr = 10;
let arrr = 2;
console.log(solution(arr, arrr));
