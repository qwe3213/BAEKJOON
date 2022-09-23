function solution(arr) {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.log(arr);
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] < arr[j][0] && arr[j][0] < arr[i][1]) {
        count++;
        arrr.push(count);
      }
    }
  }
  console.log(Math.max(...arrr));
}
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
