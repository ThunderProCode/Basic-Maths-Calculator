
//Converts the typed String to an Integers Array
function getData(){
    const rawData =  document.getElementById("dataInput").value;
    data = rawData.split(",").map(function(item){
        return parseInt(item,10);
    }); 

    data.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    document.getElementById("dataInput").value = data;
    return data;
}


//Returns the average of the numbers in the data Array
function getAverage(){   
    const average = sumOfElemens()/numberOfElements();
    if(isNaN(average)){
        document.getElementById("average-result").innerHTML = "Invalid data input";
    }else{
        document.getElementById("average-result").innerHTML = average;
    }
}

//Determines if a number is odd or even
function oddOrEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

//Returns the sum of all the elements in the data Array
function sumOfElemens(){
    const data = getData();
    let total = 0;
    data.forEach(number => {
        total += parseInt(number);
    });
    return total;
}

//Returns the number of elementes in the data array
function numberOfElements(){
    const data = getData();
    let  numbers = 0;
    data.forEach(number => {
        numbers++;
    });
    return numbers;
}

//Returns the median of the numbers in the data array
function getMedian(){
    const data = getData();
    let dataHalf;
    const numbers = numberOfElements();
    let median;

    if(oddOrEven(numbers)){
        dataHalf = (parseInt( data.length / 2 )) - 1;
        const firstMedian = parseInt(data[dataHalf]); 
        const secondMedian = parseInt(data[dataHalf + 1]);
        median = (firstMedian + secondMedian)/2;
    }else{
        dataHalf = (parseInt( data.length / 2 ));
        median = data[parseInt(dataHalf)];
    }

    document.getElementById("median-result").innerHTML = median;
}

//Returns the mode of the numbers in the data array
function getMode(){
    const data = getData();
    var mostFrequent = 1;
    var m = 0;
    var item;

    for(var i=0; i < data.length; i++){
        for(var j=i; j < data.length; j++){
            if(data[i] == data[j]){
                m++;
            }
            if(mostFrequent < m){
                mf=m;
                item = data[i];
            }
        }
        m=0;
    }
    document.getElementById("mode-result").innerHTML = item;
}