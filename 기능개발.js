function solution(pro, speeds) {
    let answer = [];
    let day = [];
    for (let i = 0; i < pro.length; i++) {
      day.push(Math.ceil((100 - pro[i]) / speeds[i]));
    }
    console.log(day);
    while (day.length > 0) {
      let cnt = 1;
      for (let i = 1; i <= day.length; i++) {
        if (day[0] >= day[i]) {
          cnt++;
          continue;
        }
        answer.push(cnt);
        day.splice(0, cnt);
        console.log(day);
        break;
      }
    }
    return answer;
  }

  let arr =[95, 90, 99, 99, 80, 99]
  let arrr=	[1, 1, 1, 1, 1, 1]	
 console.log(solution(arr,arrr));