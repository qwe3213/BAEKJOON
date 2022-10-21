function solution(price, money, count) {

    let answers= 0;
    for(let i = 1; i<=count; i++){
       answers=answers+price*i

    } if(answers<=money){
        answers=0;
    } else {
        answers=answers-money
    }
     return answers

}

let arr = 3
let arrr =20
let arrrr = 4

 console.log(solution(arr,arrr,arrrr));

 function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=1;i<=count;i++){
        totalPrice += price * i;
    }
    
    return money > totalPrice ? 0 : totalPrice-money
}