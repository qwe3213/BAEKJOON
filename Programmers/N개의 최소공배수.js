function solution(arr) {
  let result;
  arr.sort((a, b) => {
    return b - a;
  });
  let n = 1;
  while (true) {
    let an = arr[0] * n;
    if (arr.length === 1) {
      result = arr[0];
      break;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (an % arr[i] === 0) {
        count++;
      }
    }
    if (count === arr.length) {
      result = an;
      break;
    }
    n++;
  }
  return result;
}
let ar = [5, 10, 15, 20, 25];
console.log(solution(ar));
