function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return strings;
}

let arr = ["sun", "bed", "car"];
let arrr = 1;
console.log(solution(arr));
