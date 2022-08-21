
let fs = require("fs");
let input = fs.readFileSync("inp.txt").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i =1; i<n+1; i++){
    arr.push(input[i].split(" ").map((element) => Number(element)))
}
let answer= 0;
let dx=[-1,0,1,0];
let dy=[0,1,0,-1];

for( let i =0; i<n; i++){
    for(let j=0; j<n; j++){
        let flag=1;
       for(let k=0; k<4; k++){
    
        let nx= i+dx[k];
        let ny= j+dy[k];
        if(nx>=0 && nx<n && ny>=0&& ny<n&& arr[nx][ny]>=arr[i][j]){
            flag = 0;
            break;
        }
       }if(flag){
        answer++
       }
    }
}
console.log(answer);