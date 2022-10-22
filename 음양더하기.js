function solution(absolutes, signs) {
    let answer =0;
    for(let i=0; i<absolutes.length; i++){
        if(signs[i]===true){
          answer+=absolutes[i]
        }else if(signs[i]===false){
            answer-=absolutes[i]
        }
     } return answer
}

let arr = [1,2,3]
let arrr= [false,false,true]
console.log(solution(arr,arrr));