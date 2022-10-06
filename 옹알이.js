// function solution(babbling) {
//     let ar=["aya", "ye", "woo", "ma"]
//     let count = 0;
// for(let i = 0; i<babbling.length; i++){
//     for(let j = 0; j<ar.length; j++){
//         babbling[i].replace(ar[j],'')
//         babbling[i]=babbling[i].replace(ar[j],'')
//         console.log(babbling[i]);
//         if(babbling[i].length==0){
//             count++
//             break;
//         } console.log(count);
//        }
//     }
// }
// let arr=["ayaaya","yeye","woowoo","mama"]
// console.log(solution(arr));

// //var str = 'aya';

// 문자열 'A'를 빈 값으로 대체합니다.
//console.log(str.replace('aya', '').length);

// function solution(babbling) {
//     let ar=["aya","ye","woo","ma"]
//     let count = 0;
// for(let i = 0; i<babbling.length; i++){
//     for(let j = 0; j<ar.length; j++){
//         babbling[i].replace(ar[j],'')
//         babbling[i]=babbling[i].replace(ar[j],'')
//         if(babbling[i].length===0){
//             count++
//             break;
//         }
//        }
//     } return count
//}

function solution(babbling) {
  let ar = ["aya", "ye", "woo", "ma"];
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      // ayaaya = " "
      if (babbling[i].replace("mama", "") !== babbling[i]) {
        break;
      } else if (babbling[i].replace("ayaaya", "") !== babbling[i]) {
        break;
      } else if (babbling[i].replace("woowoo", "") !== babbling[i]) {
        break;
      } else if (babbling[i].replace("yeye", "") !== babbling[i]) {
        break;
      }
      babbling[i] = babbling[i].replaceAll(ar[j], "");
      if (babbling[i].length == 0) {
        count++;
        break;
      }
    }
  }
  return count;
}
let arr = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
console.log(solution(arr));
