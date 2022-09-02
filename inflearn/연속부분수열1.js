
//  function solution(m, arr){
// let answer = 0; lt= 0; sum= 0;
// for(let rt= 0; rt<arr.length; rt++){
//     sum+=arr[rt];
//     if(sum===m){
//         answer++
//     }
//     while(sum>=m){
//         sum-=arr[lt++]
//         if(sum===m){
//             answer++
//         }
//     }
// }console.log(answer);
// }


//  let a=[1, 2, 1, 3, 1, 1, 1, 2];
//  console.log(solution(6, a));
// for문 1개 while문 1개를 섞어서 푼 문제 강사님의 방식

function solution(m, arr){

    let count= 0;
    for(let i =0; i<arr.length; i++){
        let sum =0;
        sum+=arr[i]
        for(let j = i+1; j<arr.length; j++){
            sum+=arr[j]
            if(sum===m){
                count++
            }
        }
    }console.log(count);
    }
    
    
    let a=[1, 2, 1, 3, 1, 1, 1, 2];
    console.log(solution(6, a));
    
    //2중 for문을 사용하여 내가푼 방식