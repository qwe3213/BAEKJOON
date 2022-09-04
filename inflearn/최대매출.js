// function solution(k, arr){
//    let arrr =[];
//     for(let i = 0 ; i <arr.length; i++){
//         let sum=arr[i]
//          for(let j=i+1; j<k+i; j++){
//                sum+=arr[j];
//               arrr.push(sum)        
//          } 
//     } let answer= arrr.filter(el => el)
//     console.log(Math.max(...answer));
// }
// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));
// 위의 코드처럼 풀어 보았는데 이렇게 풀게 되면 NAN이 3개나와서 지우고 최대값을 구하는데 답이 나오긴함 그러나 만약 3일의합이아닌 1000일의합을 구하라하면 NAN이 1000개가 나와 길이가 몹시 길어짐...
function solution(k, arr){
    let answer= 0;
    let sum = 0;
    for(let i = 0; i<k; i++){
       sum+=arr[i];
    }
    let arrr= []
    for(let i = k; i<arr.length; i++){
       sum+=(arr[i]-arr[i-k]);
       arrr.push(sum)
    }console.log(Math.max(...arrr));
   }
   let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
   console.log(solution(3, a));
   
   // 이런식으로 구하면 NAN도 나오지 않고 깔끔하게 정리가 된다.