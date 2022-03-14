
function getData(){
    const rawData =  document.getElementById("dataInput").value;
    
    const data = rawData.split(",").map(function(item){
        return parseInt(item,10);
    }); 

    data.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    return data;
}

function getAverage(){
    const data = getData();    
    const average = sumOfElemens()/numberOfElements();
    if(isNaN(average)){
        document.getElementById("average-result").innerHTML = "Invalid data input";
    }else{
        document.getElementById("average-result").innerHTML = average;
    }
}

function oddOrEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

function sumOfElemens(){
    const data = getData();
    let total = 0;
    data.forEach(number => {
        total += parseInt(number);
    });
    return total;
}

function numberOfElements(){
    const data = getData();
    let  numbers = 0;
    data.forEach(number => {
        numbers++;
    });
    return numbers;
}

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

