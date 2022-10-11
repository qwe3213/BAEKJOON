function solution(bridge_length, weight, truck_weights) {
 let timeCount = 0;
 let bridge = Array(bridge_length).fill(0);
 let currentBridgeWeight = 0;
 while(truck_weights.length){
    timeCount=timeCount+1;
    bridge.shift();
    currentBridgeWeight = bridge.reduce((perv,curr)=>{
        return perv+curr;
    },0)
    if(currentBridgeWeight + truck_weights[0] <= weight){
        bridge.push(truck_weights.shift())
    } else {
        bridge.push(0)
    }
    console.log(bridge);
 }
  return timeCount+ bridge_length;
}

