

function solution(arr1,arr2){
    let arr=[]
    for(let i = 0; i<5; i++ ){
        for (let j=0; j<5; j++){
        
            if(arr1[i]===arr2[j]){
             arr.push(arr1[i])
            }
        }
    }
    arr.sort()
    console.log(arr);
     for(let i = 0; i<arr.length; i++){
        
     }
    }
    
    
    let a= [1,3,9,5,2]
    let b= [3,2,5,7,8]
    console.log(solution(a,b));