function solution(s) {
  let arr = [];
  for (let x of s) {
    if (!isNaN(x)) {
      arr.push(Number(x));
    } else if (x === "+") {
      let rt = arr.pop();
      let lt = arr.pop();
      arr.push(lt + rt);
    } else if (x === "-") {
      let rt = arr.pop();
      let lt = arr.pop();
      arr.push(lt - rt);
    } else if (x === "*") {
      let rt = arr.pop();
      let lt = arr.pop();
      arr.push(lt * rt);
    }
  }
  console.log(arr[0]);
}
let str = "352+*9-";
console.log(solution(str));
