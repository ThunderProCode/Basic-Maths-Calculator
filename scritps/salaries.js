//Persons list
const persons = [];


//-----------HELPERS-----------------------------
// Determine if a number is odd or even
function oddOrEven(number){
    return (number % 2 === 0);
}

//Determine the average between two numbers
function average(number1, number2){
    return (number1 + number2)/2;
}
//------------------------------------------------

//Validates that the input its not empty
function validateInput(input){
    return (input !== " " && input.length > 1);
}

//Adds the new person in the HTML
function updateSalariesList(){
    document.getElementById("persons-ul").innerHTML = "";
    var ul = document.getElementById("persons-ul");
    persons.forEach(person => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(person.name + " - " + person.salary + "$"));
        ul.appendChild(li);
    });
}

// Adds a new person to the persons list
function addPerson(){
    const inputName = document.getElementById("name-input").value;
    const inputSalary = document.getElementById("salary-input").value;

    if(validateInput(inputName) && validateInput(inputSalary)){
        persons.push({
            name: inputName,
            salary: inputSalary,
        });
        updateSalariesList();
    }else{
        alert("You need to fill both fields to add a new person");
    }
}

//Returns only the salaries from the persons list
function getSalaries(){
    const salaries = persons.map(
        function (person) {
            return parseInt(person.salary);
        }
    );
    return salaries;
}

//Sorts the salaries list 
function sortSalaries(){
    const sortedSalaries = getSalaries().sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );
    return sortedSalaries;
}

//Returns the median from the salaries list
function getSalariesMedian(salariesList){
    const mid = parseInt(salariesList.length / 2);

    if(oddOrEven(salariesList.length)){
        const midPerson1 = salariesList[mid - 1];
        const midPerson2 = salariesList[mid];
        const median = average(midPerson1,midPerson2);
        return median;
    }else {
        const midPerson = salariesList[mid];
        return midPerson;
    }
}

// Shows the median in the HTML
function getMedian(){
    const median = getSalariesMedian(sortSalaries());
    document.getElementById("median-result").innerHTML = median;
}

//--- TOP 10 MEDIAN ---------

//return top 10% of the salaries 
function top10Salaries(){
    const spliceStart = parseInt((sortSalaries().length * 90)/100);
    const spliceCount = parseInt((sortSalaries().length - spliceStart));
    const top10SalariesList = sortSalaries().splice(
        spliceStart,
        spliceCount
    );
    return top10SalariesList;
}

//Shows the top 10% salaries median in HTML

function getTopMedian(){
    const median = getSalariesMedian(top10Salaries());
    document.getElementById("top-median-result").innerHTML = median ;
}





