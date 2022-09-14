function solution(n, p) {
  let answer = "YES";
  let a = "";
  let b = n.split("");
  let c = p.split("");
  console.log(b);
  console.log(c);
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (c[i] === b[j]) {
        a += c[i];
      }
    }
  }
  if (n === a) {
    answer;
  } else {
    answer = "NO";
  }
  console.log(answer);
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
//반복문 사용하여 풀기

function solution(n, p) {
    let answer = "YES"
    let queue =n.split("")
    for(let x of p){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO"
    return answer ;
}
  
  let c = "CBA";
  let d = "CBDAGE";
  console.log(solution(a, b));
  // includes 함수와 shift 함수를 사용하여 풀기