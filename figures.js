//Square Code
function squarePerimeter(squareSide) {
    return squareSide * 4;
};

function squareArea(squareSide) {
    return squareSide* squareSide;
}

//Triangle code
function trianglePerimeter(triangleSide, triangleSide2, triangelBase) {
    return triangleSide + triangleSide2 + triangelBase;
}

function triangleArea(triangleSide, triangleSide2, triangelBase) {
    const sP = (triangleSide + triangleSide2 + triangelBase) / 2; 
    return Math.sqrt(sP * (sP - triangleSide) * (sP - triangleSide2) * (sP - triangelBase));
}

//Circle Code
function circleDiameter(radio){
    return radio * 2;
}

function circlePerimeter(circleRadio) {
    return (circleDiameter(circleRadio) * Math.PI).toFixed(4);
}

function circleArea(circleRadio) {
    return ((circleRadio * circleRadio) * Math.PI).toFixed(4);
}

//Square
function calculateSquarePerimeter() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    document.getElementById("square-perimeter-answer").innerHTML = perimeter + "cm";
}

function calculateSquareArea() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);
    document.getElementById("square-area-answer").innerHTML = area + "cm^2";
}

//Triangle
function calculateTrianglePerimeter() {
    const side1 = document.getElementById("triangleSide1Input");
    const side2 = document.getElementById("triangleSide3Input");
    const base = document.getElementById("triangleBaseInput");

    const perimeter = trianglePerimeter(side1,side2,base);
    alert(perimeter);
}

function calculateTriangleArea() {
    const side1 = document.getElementById("triangleSide1Input");
    const side2 = document.getElementById("triangleSide3Input");
    const base = document.getElementById("triangleBaseInput");
}

//Circle 
function calculateCirclePerimeter() {
    const radio = document.getElementById("circleRadioInput");
    const perimeter = circlePerimeter(radio.value);
    document.getElementById("circle-perimeter-answer").innerHTML = perimeter + "cm";
}

function calculateCircleArea() {
  const radio = document.getElementById("circleRadioInput");
  const area = circleArea(radio.value);
  document.getElementById("circle-area-answer").innerHTML = area + "cm^2";
}