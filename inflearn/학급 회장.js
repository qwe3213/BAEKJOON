
function solution(s) {
    let arr = s.split("");
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let arrs = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "A") {
        A++;
      } else if (arr[i] === "B") {
        B++;
      } else if (arr[i] === "C") {
        C++;
      } else if (arr[i] === "D") {
        D++;
      } else if (arr[i] === "E") {
        E++;
      }
    }
    console.log(E);
    arrs.push(A, B, C, D, E);
    if (Math.max(...arrs) === A) {
      console.log("A");
    } else if (Math.max(...arrs) === A) {
      console.log("B");
    } else if (Math.max(...arrs) === C) {
      console.log("C");
    } else if (Math.max(...arrs) === D) {
      console.log("D");
    } else if (Math.max(...arrs) === E) {
      console.log("E");
    }
  }
  let str = "BACBACCACCBDEDE";
  console.log(solution(str));
  
  // 하나씩 값을 구해 그중 제일 큰값을 구하고 다시 그 큰값이 무엇인지 하나씩 찾는 방식으로 구했다.
  function solution(s) {
    let answer;
    let sH = new Map();
    for (let x of s) {     // 문자열 하나씪 출력
      if (sH.has(x)) {    
        sH.set(x, sH.get(x) + 1);  //같을때 그값과 그값 + 1 하는 함수
      } else {
        sH.set(x, 1);   // 맨처음 나온 알파벳일때 
      }
      let max = Number.MIN_SAFE_INTEGER;
      for (let [key, val] of sH) {  
        if (val > max) {
          max = val;
          answer = key;    //가장 큰 값 구하기
        }
      }
    }
    console.log(answer);
  }
  
  let strr = "BACBACCACCBDEDE";
  console.log(solution(strr));
  // 강사님의 풀이 방식 평소에 쓰지않고 새로운 방식을 보게되어 좋았고 나도 한번쯤 쓸수있도록 노력해봐야겠다.!