function solution(n, words) {
  let answer = [0, 0];
  let indices = [];
  const distinct = new Set(words);
  const filtered = words.filter((item) => {
    if (distinct.has(item)) {
      distinct.delete(item);
    } else {
      return item;
    }
  });
  let one = [...new Set(filtered)];
  let idx = words.indexOf(one[0]);
  while (idx != -1) {
    indices.push(idx);
    idx = words.indexOf(one[0], idx + 1);
  }
  let position = indices[1];
  if (position > 0) {
    let person = position + 1 > n ? (position + 1) % n : position + 1;
    let term = Math.ceil((position + 1) / n);
    answer = [person === 0 ? n : person, term];
  }

  let ans = [];
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      ans.push(i + 1);
    }
    let position = ans[0];
    if (position > 0) {
      let person = position + 1 > n ? (position + 1) % n : position + 1;
      let term = Math.ceil((position + 1) / n);
      answer = [person === 0 ? n : person, term];
      break;
    }
  }
  return answer;
}
// 만약 이미 말했던 단어 일때와 앞 단어의 끝 글자와 이어지지 않을때가 중복되었을때 더 빨리 나오는 값을 찾지못하여 100점중 90점이 나오는것 같다.
function solution(n, words) {
  let answer = [0, 0];
  let tempArr = [];
  let position = 0;
  ㅤ;
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      let lastWord = String(tempArr[tempArr.length - 1]);
      if (
        lastWord.substr(lastWord.length - 1) !== String(words[i]).substr(0, 1)
      ) {
        //## 앞 단어의 끝 글자와 이어지지 않을 때
        position = i;
      } else if (tempArr.includes(words[i])) {
        //## 이미 말했던 단어 일 때
        position = i;
      }
    }
    tempArr.push(words[i]);
    ㅤ;
    if (position > 0) {
      let person = position + 1 > n ? (position + 1) % n : position + 1;
      let term = Math.ceil((position + 1) / n);
      answer = [person === 0 ? n : person, term];
      break;
    }
  }
  return answer;
}
let arr = 2;
let arrr = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log(solution(arr, arrr));
