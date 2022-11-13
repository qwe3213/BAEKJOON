function solution(s) {
  let count = 1;
  let counts = 0;
  let anwer = [];
  while (true) {
    let ann = s.length;
    let an = s.replaceAll("0", "");
    let ln = an.length;
    let lnn = ann - ln;
    let bi = ln.toString(2);
    if (bi.length === 1) {
      counts += lnn;
      break;
    } else {
      count++;
      counts += lnn;
      s = bi;
    }
  }
  anwer.push(count, counts);
  return anwer;
}
let arr = "1111111";
console.log(solution(arr));
