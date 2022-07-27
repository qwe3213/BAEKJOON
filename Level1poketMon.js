function solution(nums) {
    var answer = 1
    let result=[...new Set(nums)];
    for(let i=0; i<result.length; i++){
        
        
      if(result[0]!==result[i]&&answer<nums.length/2){ 
          answer++
          
      }
    }
    return answer;
}