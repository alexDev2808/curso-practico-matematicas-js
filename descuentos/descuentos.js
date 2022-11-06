const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const btn = document.querySelector("btnCalcular")
const result = document.querySelector('.result')
const formDescuentos = document.querySelector("#formDescuentos");


formDescuentos.addEventListener('submit', calcularDescuentos);

const couponsList = [];

couponsList.push({
    name: "PLATZIDAY",
    discount: 30,
})
couponsList.push({
    name: "PLATZICONF",
    discount: 35,
})
couponsList.push({
    name: "PLATZIFEST",
    discount: 20,
})


function calcularDescuentos(event){
    event.preventDefault();
    const couponInput = discount.value


    function isCouponInArray(couponElement){
        return couponElement.name == couponInput;
    }

    // Find devuelve el objeto directamente
    const couponInArray = couponsList.find(isCouponInArray)


    // const couponsAvailables = {
    //     PLATZICONF: 30,
    //     PLATZIFEST: 25,
    //     PLATZIDAY: 20,
    //     ALEXDEV2808: 35,
    //     'PLAT21PLUS': 40
    // }


    const applyDiscount = couponInArray.discount;
    
    if(!price.value || !discount.value){
        result.innerText = "Por favor escribe los valores correspondientes!"
        return;
    }
    if(!couponInArray){
        result.innerText = "El cupon que escribiste no existe!"
        return;
    }
    const finalResult = (parseFloat(price.value ) * (100 - parseFloat(applyDiscount))) / 100;
    result.innerText = "Precio con Descuento: " + finalResult.toFixed(2);

}

