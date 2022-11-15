// function solution(s) {
// let ss = s.split("");
// for (let i = 0; i < ss.length; i++) {
//   let j = i + 1;
//   console.log(j);
//   while (ss[i] === ss[j]) {
//     j++;
//   }
//   if (ss[i] === ss[i + 1]) {
//     ss.splice(i, j - i);
//     i = i - 1;
//     console.log(ss);
//   }
// }
// }
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}
let ar = "baabaa";
console.log(solution(ar));
