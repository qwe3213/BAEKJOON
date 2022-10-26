function solution(a, b, n) {
  let c;
  let answer = 0;
  while (n >= a) {
    let c = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += c;
  }
  return answer;
}

let arr = 2;
let arrr = 1;
let arrrr = 20;
console.log(solution(arr, arrr, arrrr));
