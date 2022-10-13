function solution(citations) {
  citations.sort((a,b)=>{
    return b-a;
  })
  let answer =0;
  console.log(citations);
  for(let i =0; i<citations.length; i++){
    if(i<citations[i]){
        answer++
    }
  }
   return answer
}
//모든 바퀴를 돌고 결과 나옴
function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;
}
// 돌다가 중간에 값이 나오면 답이 나와 더 효율적

let arr =[3, 0, 6, 1, 5]
 console.log(solution(arr));