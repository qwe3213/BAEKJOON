function solution(numbers) {
 
   let answer =arr.reduce((a,b)=>(a+b))
     
   return 45-answer
   }


let arr = [1,2,3,4,6,7,8,0]
 console.log(solution(arr));

 //1~9 더한값 빼기 배열내의합

 function solution(numbers) {
    let answer = 0;
    for (let i = 1; i <= 9; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    return answer;
}
//반복해서 없는값 더하기