function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let cnt = 0
let result = []
let senderArr = []
let recieverArr = []
let twodArr = []
function processLogs(logs, threshold) {
    
    for(let i = 0; i < logs.length; i++){
            result = logs[i].split(' ') 
            twodArr.push(result)
        }
        
        for(let i = 0; i < twodArr.length; i++){
            senderArr.push(twodArr[i][0])
             for(let j = 0; j < twodArr[i].length; j++){
            
                }
                 recieverArr.push(twodArr[i][1])
        }  
     
   // var unique = a.filter(onlyUnique);
  
   
   let senderArr2 = senderArr
   senderArr2 = senderArr2.filter(onlyUnique);
   let recieverArr2 = recieverArr
   recieverArr2 = recieverArr.filter(onlyUnique);
   
   let combined = [].concat(senderArr,recieverArr)
   //combined = combined.filter(onlyUnique);
   
    //let cntS = 0
    //cntS = senderArr.filter((v) => (v === (combined[0]))).length;
   
   //console.log(combined[0])
   
   /*for(let k = 0;  k < combined.length; k++){
       for(let l = 0;  l < senderArr.length; l++){
           if(senderArr[l] == combined[k]){
               cnt++;
           }
        }
             
   }*/
  
   let firstCnt = 0
    function mode(combined)
    {
        if(combined.length == 0)
            return null;
        var modeMap = {};
        var maxEl = combined[0], maxCount = 1;
        for(var i = 0; i < combined.length; i++)
        {
            var el = combined[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
                firstCnt = maxCount
            }
        }
        return maxEl ;
    }
    
    let secondCnt = 0
    function moden(combined)
    {
        if(combined.length == 0)
            return null;
        var modeMap = {};
        var maxEl = combined[0], maxCount = 1;
        for(var i = 0; i < combined.length; i++)
        {
            var el = combined[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
                secondCnt = maxCount
            }
        }
        return maxEl ;
    }

    let arrRes = mode(combined)
    let cntS = []
    cntS = combined.filter((v) => (v !== arrRes));
    let arrRes2 = moden(cntS)
    
    //console.log(arrRes2)
    if(firstCnt >= threshold){
        if(firstCnt == secondCnt){
            return [arrRes, arrRes2]
        }else if(firstCnt > secondCnt){
            return [arrRes]
        }
    }
}