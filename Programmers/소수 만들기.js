function checkPrime(num) {
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let target = nums[i] + nums[j] + nums[k];
        if (checkPrime(target)) {
          answer++;
        }
      }
    }
  }
  return answer;
}
let arr = [1, 2, 7, 6, 4];
console.log(solution(arr));
