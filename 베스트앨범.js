// function solution(genres, plays) {
//   let set = new Set(genres);
//   let newArr = [...set];
//   let arrs = [];
//   let parrs = [];
//   for (let i = 0; i < genres.length; i++) {
//     let garr = [];
//     let parr = [];
//     if (genres[i] === newArr[0]) {
//       garr.push(i, plays[i]);
//       arrs.push(garr);
//     } else if (genres[i] === newArr[1]) {
//       parr.push(i, plays[i]);
//       parrs.push(parr);
//     }
//   }
//   arrs.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
//   parrs.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));

//   let C = arrs[0][1] + arrs[1][1];
//   let P = parrs[0][1] + parrs[1][1];
//   let answer = [];
//   if (C > P) {
//     answer.push(arrs[0][0], arrs[1][0], parrs[0][0], parrs[1][0]);
//   } else {
//     answer.push(parrs[0][0], parrs[1][0], arrs[0][0], arrs[1][0]);
//   }
//   return answer;
// }
// 런타임 에러 or 다틀림....
function solution(genres, plays) {
    // input 객체화 시키기
    const chart = genres.reduce((obj, genre, i) => {
      if (!obj[genre]) {
        obj[genre] = { playCount: plays[i], list: [] };
      } else {
        obj[genre].playCount += plays[i];
      }
      obj[genre].list.push([i, plays[i]]);
      
      return obj;
    }, {});
  
    // 객체 정렬
    const sorted = Object.values(chart).sort((a, b) => {
      // 내림차순 정렬
      return b.playCount - a.playCount;
    });
  
    // 정렬한 sorted를 사용한다.
    const answer = sorted.reduce((acc, genre) => {
      genre.list.sort((a, b) => {
        return b[1] - a[1];
      });
      acc.push(genre.list[0][0]);
  
      if (genre.list.length > 1) {
        acc.push(genre.list[1][0]);
      }
      return acc;
    }, []);
  
    return answer;
  }
// reduce를 활용한 문제풀이 
let arr = ["classic", "pop", "classic", "classic", "pop"];
let arrr = [500, 600, 150, 800, 2500];
console.log(solution(arr, arrr));
