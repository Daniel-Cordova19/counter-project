// Tu código aquí.

// Variable de estado: un number para almacenar el valor del contador actual
let counter = 0;// Tu código aquí.

// Seleccionar el botón ADD COUNT y añadir un listener para el evento 'click'. Cada vez que el usuario haga click en el botón, incrementamos en 1 la variable de estado. 

document.querySelector(".nextBtn").addEventListener("click", () => {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
    counter.style.backgroundColor = 'red';

    counter.addEventListener('click', function() {
        caja.style.backgroundColor = 'red';
      });
});



  document.querySelector(".prevBtn").addEventListener("click", () => {
    counter--;
    document.querySelector("#counter").innerHTML = counter;
  });