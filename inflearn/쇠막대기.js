function solution(s) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(s[i]);
    } else {
      if (s[i - 1] === "(") {
        arr.pop();
        count += arr.length;
      } else {
        count += 1;
        arr.pop();
      }
    }
    console.log(count);
  }
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
