function solution(d, budget) {
  let arr = [];
  d.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget >= 0) {
      arr.push(d[i]);
    }
  }
  return arr.length;
}

let arr = [2, 2, 3, 3];
let arrr = 10;
console.log(solution(arr, arrr));
