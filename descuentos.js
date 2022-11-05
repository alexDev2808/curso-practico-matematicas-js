const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const btn = document.querySelector("btnCalcular")
const result = document.querySelector('.result')
const formDescuentos = document.querySelector("#formDescuentos");


formDescuentos.addEventListener('submit', calcularDescuentos);

function calcularDescuentos(event){
    event.preventDefault();
    if(!price.value || !discount.value){
        result.innerText = "No has escrito nada, por favor escribe los valores correspondientes!"
        return;
    }
    if(discount.value > 100){
        result.innerText = "Ijole no se va a poder!"
        return;
    }
    const finalResult = (parseFloat(price.value ) * (100 - parseFloat(discount.value))) / 100;
    result.innerText = "Precio con Descuento: " + finalResult.toFixed(2);

}

