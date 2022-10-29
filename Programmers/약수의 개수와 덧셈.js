function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    arr.length % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
// 단순하게 하나씩 구하여 풀기

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
// 출처: https://overcome-the-limits.tistory.com/525 [Plus Ultra:티스토리]
// //수학적 개념 활용 풀기
