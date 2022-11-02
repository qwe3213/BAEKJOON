function solution(skill, skill_trees) {
  //let arr = [];
  //let answer = skill_trees.length;
  for (let i = 0; i < skill_trees.length; i++) {
    let stack = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      for (let k = 0; k < skill.length; k++) {
        if (skill_trees[i][j] === skill[k]) {
          stack.push(skill[k]);
        }
      }
    }
    arr.push(stack);
  }
  //위의 코드는 반복문으로 하나하나 찾아서 구하는방법
  let answer = skill_trees.length;
  const arr = skill_trees.map((tree) => {
    return tree.split("").filter((x) => skill.includes(x));
  });
  // 위의코드를 map 함수와 filter 함수를 사용하여 간결한 코드로 만든것
  // for (let i = 0; i < arr.length; i++) {
  //   let aa = arr[i].length;
  //   let count = 0;
  //   for (let j = 0; j < aa; j++) {
  //     if (skill[j] === arr[i][j]) {
  //       count++;
  //     }
  //     if (count === arr[i].length) {
  //       answer++;
  //     }
  //   }
  // }
  // 맨처음에는 조건식을 위의코드처럼 했는데 실패하여 다시 짜보았다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != skill[j]) {
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}
let arr = "CBD";
let arrr = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(arr, arrr));
// for (let i = 0; i < skill_trees.length; i++) {
//     let stack = [];
//     for (let j = 0; j < skill[i].length; j++) {
//       for (let k = 0; k < skill.length; k++) {
//         if (skill_trees[i][j] === skill[k]) {
//           stack.push(skill[k]);
//         }
//         console.log(stack);
//       }
//     }
//   }

// for (let i = 0; i < arr.length; i++) {
//   let aa = arr[i].length;
//   let count = 0;
//   for (let j = 0; j < aa; j++) {
//     if (skill[j] === arr[i][j]) {
//       count++;
//     }
//     if (count === arr[i].length) {
//       answer++;
//     }
//   }
// }
