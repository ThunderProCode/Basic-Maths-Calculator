function discount (price,discount) {
    const priceWithDiscount = ((price * (100 - discount))/100);
    return priceWithDiscount;
}

function getDiscount(){
    const price = document.getElementById("priceInput").value;
    const inputDiscount = document.getElementById("discountInput").value;
    const finalPrice = discount(price,inputDiscount);
    document.getElementById("final-price").innerHTML = finalPrice;
}

function percentage(percentage, number){

}
