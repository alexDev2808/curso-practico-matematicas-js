const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const btn = document.querySelector("btnCalcular")
const result = document.querySelector('.result')
const formDescuentos = document.querySelector("#formDescuentos");


formDescuentos.addEventListener('submit', calcularDescuentos);


function calcularDescuentos(event){
    event.preventDefault();

    const couponsAvailables = {
        PLATZICONF: 30,
        PLATZIFEST: 25,
        PLATZIDAY: 20,
        ALEXDEV2808: 35,
        'PLAT21PLUS': 40
    }

    const couponInput = discount.value

    const applyDiscount = couponsAvailables[couponInput];
    
    if(!price.value || !discount.value){
        result.innerText = "Por favor escribe los valores correspondientes!"
        return;
    }
    if(!applyDiscount){
        result.innerText = "El cupon que escribiste no existe!"
        return;
    }
    const finalResult = (parseFloat(price.value ) * (100 - parseFloat(applyDiscount))) / 100;
    result.innerText = "Precio con Descuento: " + finalResult.toFixed(2);

}

