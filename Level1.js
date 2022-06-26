function solution(n){
    
    var num=0;
      
    do{ 
    num+=n%10;
    n=Math.floor(n/10);
    }
      while(n>0);
    return num;


}