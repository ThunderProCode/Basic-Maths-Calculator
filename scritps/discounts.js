function discount (price,discount) {
    const priceWithDiscount = ((price * (100 - discount))/100);
    return priceWithDiscount;
}

function getDiscount(){
    const price = document.getElementById("priceInput").value;
    const inputDiscount = document.getElementById("discountInput").value;
    const finalPrice = discount(price,inputDiscount);
    const finalPriceCoupon = hasCuppon(finalPrice);
    document.getElementById("final-price").innerHTML = finalPriceCoupon;
}

function hasCuppon(price){
    const coupon = document.getElementById("couponInput").value;
    if(coupon === "rgxvndl"){
        return (price * (100 - 10))/100;
    }else if( coupon === "oniphtm"){
        return (price * (100 - 20))/100;
    }else {
        return price;
    }
}
