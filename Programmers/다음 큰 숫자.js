function solution(n) {
  let count = 0;
  let an = n.toString(2);
  let answer;
  for (let i = 0; i < an.length; i++) {
    if (an[i] === "1") {
      count++;
    }
  }
  while (true) {
    n++;
    let counts = 0;
    let ann = n.toString(2);
    console.log(ann.length);
    for (let i = 0; i < ann.length; i++) {
      console.log(ann);
      if (ann[i] === "1") {
        counts++;
      }
    }
    if (count === counts) {
      answer = n;
      break;
    }
  }
  return answer;
}

let arrr = 1000000;
console.log(solution(arrr));
//78 1 2 4 8 16 32 64  64 8 1001110
