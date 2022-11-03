function solution(n, stations, w) {
  var answer = 0;
  var station;

  if (stations.length == 0) {
    station = n + w + 1;
  }
  station = stations.shift();

  var i = 1;
  while (i <= n) {
    // i가 전파를 못받는 지점일때, 설치하기
    if (station - w > i) {
      // 연속된 비 전파구역에 최소한으로 설치하기
      var m = Math.ceil((station - w - i) / (2 * w + 1));
      i = station + w + 1;
      answer += m;
    }

    //station 안에 존재 할 때
    if (station - w <= i) {
      i = station + w + 1;
      if (stations.length) {
        station = stations.shift();
      } else {
        station = n + w + 1;
      }
    }
  }

  return answer;
}
