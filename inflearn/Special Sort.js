// function solution(arr){
// let arrr=[];
// for(let i = 0; i <arr.length; i++){
//    if(arr[i]<0){
//    arrr.push(arr[i])
//    }   
// }
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         arrr.push(arr[i])
//     }    
// }console.log(arrr);
// }

// let arr=[1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

function solution(arr){
    for(let i = 0 ; i<arr.length-1; i++){
        for(let j = 0; j <arr.length-i-1; j++){
            if(arr[j]>0 && arr[j+1] < 0){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }console.log(arr);
    }
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));