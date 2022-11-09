function solution(s) {
  var answer = "";
  let result = s.split(" ");

  let result2 = result.map(
    (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
  );

  answer = result2.join(" ");
  return answer;
}

function solution(s) {
  let result = s[0].toUpperCase();
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === " ") {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }
  return result;
}

let ar = "3people unFollowed me";
console.log(solution(ar));

// if (isNaN(an[i][0])) {
//   an[i][0] = an[i][0].toUpperCase();
// }
// for (let j = 1; j < an[i].length; j++) {
//   an[i][j] = an[i][j].toLowerCase();
// }
