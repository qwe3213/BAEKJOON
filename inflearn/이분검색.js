function solution(target, arr){
let count = 1;
    arr.sort((a,b)=>{
   return a-b
})
console.log(arr.indexOf(target)+1);

}
//순서대로 찾기

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));


function solution(target, arrr){
  let answer ;
  arrr.sort((a,b)=>{
    return a-b
 })

  let lt = 0;
  let rt = arrr.length-1;
   while(lt<=rt){
    let mid = parseInt((lt+rt)/2)
    if(arrr[mid]===target){
        answer=mid+1;
        break;
    }
    else if(arrr[mid]>target) {
        rt=mid-1
    }
    else{ 
        lt=mid+1;
    } 
   }console.log(answer);
}


let arrr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arrr)); 

// 반으로나눠서 찾아보고 범위안의 없을경우 반씩계속 나눠서 빠르게 찾는 방법