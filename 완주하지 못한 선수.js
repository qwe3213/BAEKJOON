function solution(participant, completion) {
   
    for(let i =0; i<completion.length; i++){ 
        for(let j =0; j<participant.length; j++){
            if(completion[i]==participant[j]){
              participant[j] = participant[j].replace(completion[i],"")
              break;
            } 
        } 
    }  participant =  participant.filter(function(item) {
        return item !== null && item !== undefined && item !== '';
      });
     return participant[0]
}
//효율성 문제로 다틀림 

function solution(participant, completion) {
    participant.sort(); 
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
 
            return participant[i];
 
        }
    }
}
// 문제를 다시 보았고 길이가 1 작기때문에 무조건 하나만달라서 순서대로 정리한후 마지막하나 남은값 출력