function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      // console.log(v); 중위순회 출력
      DFS(v * 2 + 1);
      // console.log(v); 후위 순외 출력
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
