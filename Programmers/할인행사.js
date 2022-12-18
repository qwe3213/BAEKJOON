function solution(want, number, discount) {
  var answer = 0;
  let startIndex = 0;
  let wishlist = [];

  for (let j = 0; j < want.length; j++) {
    for (let i = 0; i < number[j]; i++) {
      wishlist.push(want[j]); //원하는 항목과 그의 개수를 빈배열에 넣기
    }
  }
  while (startIndex !== discount.length - 9) {
    let newArr = [...wishlist];

    for (let i = startIndex; i < startIndex + 10; i++) {
      //넘버 원소의 합은 10이라 하였으니 10을 더해줌
      if (newArr.includes(discount[i])) {
        newArr.splice(newArr.indexOf(discount[i]), 1); //만약 같은 것이 있을때 그위치에 맞는 항목 제거하기
      }
    }
    if (newArr.length === 0) {
      // 배열내의 항목이 다맞게 제거되어 길이가 0일경우 값 1개더하기
      answer++;
    }
    startIndex++;
  }
  return answer;
}
