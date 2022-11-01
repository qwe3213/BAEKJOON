function solution(w, h) {
  let answer;
  let gcd;

  let min = Math.min(w, h);
  console.log(min);
  for (let i = min; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      gcd = i;
      break;
    }
  }
  answer = w * h - (w + h - gcd);
  return answer;
}
let arr = 8;
let arrr = 12;
console.log(solution(arr, arrr));
