let input = require('fs').readFileSync('inp.txt').toString().split('\n');

const T = parseInt(input.shift()); // Case 수


// solution 1 N(번째손님)이 H(층수)보다 클 경우 N - H 를 통해 구해주는 방법.
for (let i = 0; i < T; i++) {
  const HWN = input[i].split(' ');
  let H = parseInt(HWN.shift()); // 층
  HWN.shift(); // 가운데 요소는 제거해준다.
  let N = parseInt(HWN.shift()); // N번째 손님
  let roomCnt = 1; // 엘리베이터에서 몇번째로 떨어져있는지.
  
  while (N > H) {
    roomCnt++;
    N = N - H;
  } // N번째 손님이 층수보다 클 경우 roomCnt를 ++ 해주고 N 에서 H를 빼준다.
  if (roomCnt < 10) {
    console.log(`${N}0${roomCnt}`);
  } else {
    console.log(`${N}${roomCnt}`);
  }
}
