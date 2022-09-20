function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  console.log(answer);
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

//배열내의 길이가 5가넘을때 배열내의 맨마지막 제거후 배열내 푸쉬함

function solution(size, arrr) {
  let answer = Array.from({ length: size }, () => 0);
  arrr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

let arrr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arrr));

// 배열의 길이를 5로 정하고 입력값과 배열내의 값이 같을경우 같은수의 배열내의 위치부터 왼쪽의 값으로 덮어씌여지고 아닐경우 맨뒤에서부터 왼쪽의 값으로 덮어씌여진다.