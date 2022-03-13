
function getData(){
    const rawData =  document.getElementById("dataInput").value;
    const data = rawData.split(";"); 
    return data;
}

function getAverage(){
    const data = getData();
    let total = 0;
    let numbers = 0;
    data.forEach(number => {
        total += parseInt(number);
        numbers++;
    });
    const average = total/numbers;
    
    if(isNaN(average)){
        document.getElementById("average-result").innerHTML = "Invalid data input";
    }else{
        document.getElementById("average-result").innerHTML = average;
    }
}

