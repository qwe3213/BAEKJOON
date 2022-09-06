function solution(s1, s2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of s1) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  for (let x of s2) {
    if (!sH.has(x) || sH.get(x) === 0) { //sH의 안에 s2의 값이 없거나 sH의 값이 s2에 없는거 찾기 
      answer = "NO";
    }
    sH.set(x, sH.get(x) - 1);  //만약 찾았으면 그값 1빼기
  } console.log(sH);
  console.log(answer);
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
