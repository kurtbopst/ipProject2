
function performStatistics(){
    //get value
    str = document.getElementById('nums').value;
    //input validation - spaces
    var spaceCount = 0;
    for( var x = 0; x < str.length; x++){
        if (str[x] == " "){
            spaceCount++;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
        }
    if(spaceCount < 4 || spaceCount > 19){
            alert("Please enter 5-20 numbers, seperated by spaces");
            return false;
    }

    //Create num array
    numsChar = str.split(" ",20);
    nums = numsChar.map(Number);

    //input validation - numbers
    for (  var x = 0; x < nums.length; x++){
        if(nums[x] < 0 || nums[x] > 100){
            alert("Please make sure your numbers are between 0 to 100");
            return false;
      }

    }

    //sort the array - insertion sort ftw
    for(var x = 1; x < nums.length; ++x){
        var key = nums[x];
        var y = x - 1;

        while( y >= 0 && nums[y] > key){
            nums[y + 1] = nums[y];
            y = y - 1;
        }
        nums[y + 1] = key;
    }

    //Do the stuff
    document.getElementById('mean').value = calcMean(nums).toFixed(2);
    document.getElementById('max').value = findMax(nums).toFixed(2);
    document.getElementById('min').value = findMin(nums).toFixed(2);
    document.getElementById('median').value = calcMedian(nums).toFixed(2);
    document.getElementById('mode').value = calcMode(nums);
    document.getElementById('stdDev').value = calcStdDev(nums).toFixed(2);
    document.getElementById('variance').value = calcVariance(nums).toFixed(2);
    document.getElementById('sum').value = calcSum(nums).toFixed(2);

    return false;
}



function calcSum(array){
    var sum = 0;
    for( var x = 0; x < array.length; x++){
        sum += array[x];
    }return sum;
}

function calcMean(array){
    return calcSum(array) / array.length;;
}

function calcMedian(array){
    var low = Math.floor((array.length - 1) / 2);
    var high = Math.ceil((array.length - 1) /2);

    return (array[low] + array[high]) / 2;

}

function calcMode(array){
    //mean - 3(mean - median) - doesn't support multimodal
    var frequency = {};
    var mode = 0;
    array.forEach( function (key){
        if(frequency.hasOwnProperty(key))
            frequency[key]++;
        else frequency[key] = 1;
    });
    //find max frequency
    for( var x = 0; x < array.length; x++){
        if( x == 0 ) mode = array[x];
        else if( frequency[mode] < frequency[array[x]] ){
            mode = array[x];
        }
    }
    //convert mode to string
    strMode = mode.toString();
    var stack = [mode];
    // for Multi-modal
    for( var x = 0; x < array.length; x++){
        if(frequency[mode] == frequency[array[x]] && !(stack.includes(array[x]))){
            strMode += " " + array[x].toString();
            stack.push(array[x]);
        }
    }
    return strMode;
}

function calcStdDev(array){
    return Math.sqrt(calcVariance(array));
}

function calcVariance(array){
    var mean = calcMean(array);
    var E = 0;
    for( var x = 0; x < array.length; x++){
        E += (array[x] - mean)*(array[x] - mean);
    }

    return (E / array.length);
}

function findMax(array){
    return array[array.length - 1];
}

function findMin(array){
  return array[0];
}
