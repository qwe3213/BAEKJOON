function solution(arr1,arr2){
    let arr =[];
   let n=arr1.length;
   let m=arr2.length;
   let p1=0;
   let p2=0;
   while(p1<n && p1<m){
     if(arr1[p1]<=arr2[p2]){
       arr.push(arr1[p1++])
     }else {
       arr.push(arr2[p2++])
     }
   } while(p1<n){
     arr.push(arr1[p1++]);
   }
     while(p2<m){
       arr.push(arr2[p2++]);
       console.log(arr);
   }
} 

  let a= [1,3,5]
  let b= [2,3,6,7,9]
console.log(solution(a,b));