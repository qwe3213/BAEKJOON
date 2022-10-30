function solution(order) {
  let a = String(order).split("");
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "3" || a[i] === "6" || a[i] === "9") {
      count++;
    }
  }
  return count;
}
let arr = 29423;
console.log(solution(arr));
