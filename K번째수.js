function solution(array, commands) {
    console.log(array);
    let arr =[]
for(let i = 0 ; i<commands.length; i++){
    let ar =array.slice(commands[i][0]-1,commands[i][1])
   ar.sort((a,b)=>{
    return a-b
   })
   arr.push(ar[commands[i][2]-1])
}
console.log(arr);
}

