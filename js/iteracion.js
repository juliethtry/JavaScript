//for(/*inicio-condicion-acumulador*/)

//}

for (let i = 0; i < 9; i++) {
    let card = `<div class="m-3" style="width: 18rem;">
<img src="https://i1.wp.com/acuariomichin.com/wp-content/uploads/2020/08/cocodrilo-mas-grande-del-mundo-portada.jpg?resize=1080%2C675&ssl=1" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${i}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
document.getElementById("contender-tarjetas").html +=card;
    //ejecuta diez veces
}


let titulo ="hola"

let i = 0

while (i <= 9){ 
  let card = `<div class="m-3" style="width: 18rem;">
<img src="https://i1.wp.com/acuariomichin.com/wp-content/uploads/2020/08/cocodrilo-mas-grande-del-mundo-portada.jpg?resize=1080%2C675&ssl=1" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${i}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;


    document.getElementById("contenedor-tarjetas").innerHTML += card
    i++;
}