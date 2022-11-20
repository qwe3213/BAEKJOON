function solution(s) {
  if (s.length % 2 === 1) return 0;
  let ss = s.split("");
  let stack = [];
  let count = 0;
  let an = true;
  for (let i = 0; i < ss.length; i++) {
    if (i !== 0) {
      let an = ss.shift();
      ss.push(an);
    }
    an = true;
    let sp = [];
    for (let j = 0; j < ss.length; j++) {
      if (ss[j] === "(" || ss[j] === "{" || ss[j] === "[") sp.push(ss[j]);
      else {
        let ans = sp.pop();
        if (ss[j] === ")" && ans === "(") continue;
        if (ss[j] === "}" && ans === "{") continue;
        if (ss[j] === "]" && ans === "[") continue;
        an = false;
        break;
      }
    }
    if (an) count++;
  }
  return count;
}

let arrr = "[](){}";
console.log(solution(arrr));
