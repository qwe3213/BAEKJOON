function solution(survey, choices) {
  let table = new Map();
  Array("R", "T", "C", "F", "J", "M", "A", "N").forEach((a) => table.set(a, 0));
  survey.forEach((e, i) => {
    let score = choices[i] - 4;
    if (score > 0) {
      table.set(e[1], table.get(e[1]) + score);
    } else if (score < 0) {
      table.set(e[0], table.get(e[0]) + Math.abs(score));
    }
  });
  let answer = "";
  Array("RT", "CF", "JM", "AN").forEach((e) => {
    answer += [...e].sort((a, b) => table.get(b) - table.get(a))[0];
  });
  return answer;
}
let arr = ["AN", "CF", "MJ", "RT", "NA"];
let arrr = [5, 3, 2, 7, 5];
console.log(solution(arr, arrr));
// if (choices[i] === 1) {
//     survey[i][0] = 3;
//   } else if (choices[i] === 2) {
//     survey[i][0] = 2;
//   } else if (choices[i] === 3) {
//     survey[i][0] = 1;
//   } else if (choices[i] === 5) {
//     survey[i][1] = 1;
//   } else if (choices[i] === 6) {
//     survey[i][1] = 2;
//   } else if (choices[i] === 7) {
//     survey[i][1] = 3;
//   }
