function solution(X, Y) {
    let arr=[]
  for(let i =0; i<X.length; i++){
    for(let j = 0 ; j<Y.length; j++){
        if(X[i]===Y[j]){
          arr.push(X[i])
          Y=Y.replace(X[i],"");
        }
    }
  } arr.sort((a,b)=>{
    return b-a
  })
  console.log(arr);
  let answer =""
   for(let i = 0 ;i<arr.length; i++){
    if(arr.length!==0){
        answer+=arr[i]
    } 
   } if(arr.length===0)
   answer ="-1"
if(arr[arr.length-1]==='0'&& arr[0]==='0')
   answer="0"
   if(arr.length===1 && arr[0]==='0')
   answer="0"
   return answer
} 

let arr = "100"
let arrr ="203045"
 console.log(solution(arr,arrr));

// 이런식으로 푸니 시간 초과가 났고 놓친 부분이 있어 3개가 틀렸다.

function solution(X, Y) {
    var answer = "";
  
    X = [...X];
    Y = [...Y];
    console.log(X, Y);
  
    for (let i = 0; i < 10; i++) {
      const X_cnt = X.filter((item) => +item === i).length;
      const Y_cnt = Y.filter((item) => +item === i).length;
          answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
    }
  
    if (answer === "") {
      return "-1";
    } else if (answer.match(/[^0]/g) === null) {
      return "0";
    } else {
      return [...answer].sort().reverse().join("");
    }
  }

  let arrrrr = "100"
let arrrr ="203045"
 console.log(solution(arrrrr,arrrr));