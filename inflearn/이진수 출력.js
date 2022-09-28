function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n == 0) return;
    else {
      DFS(Math.floor(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  console.log(answer);
}

console.log(solution(11));
