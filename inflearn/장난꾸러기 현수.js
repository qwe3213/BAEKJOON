function solution(arr) {
  let arrr = [];
  let a = arr.length - 1;
  let num = 0;
  let b = 0;
  let c = 0;
  for (let i = a; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      num += arr[i];
      b = b + i + 1;
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      c = c + i + 1;
      break;
    }
  }
  console.log(c, b);
}
//반복문을 사용한 풀이

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

function solution(arrr) {
  let answer = [];
  let sortArr = arrr.slice();
  console.log(sortArr);
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arrr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arrr));
// 오름차순으로 정렬한 후에 비교해서 풀기