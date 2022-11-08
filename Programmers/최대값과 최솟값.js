function solution(s) {
  let result = s.split(" ");
  let max = Math.max(...result);
  let min = Math.min(...result);
  return min + " " + max;
}

let ar = "-1 -2 -3 -4";
console.log(solution(ar));
