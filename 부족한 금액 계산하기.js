function solution(price, money, count) {
    let total_price = 0;

    for (let i = 0; i <= count; i++) {
        total_price += price * i;
    }
    return money > total_price ? 0 : total_price - money;
}