function solution(s) {
  let count = 0;
  let counts = 0;
  let a = s.split("");
  let c = a.length - 1;
  console.log(c);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "(") {
      count++;
    } else if (a[i] === ")") {
      counts++;
    }
    console.log(count, counts);
  }
  if (count !== counts || a[0] === ")" || a[c] === "(") {
    console.log("NO");
  } else {
    console.log("YES");
  }
}

let ad = "(())(()(()))(())";
console.log(solution(a));

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
