

function buttonClick(value) {
    console.log (value);
}


function init()
{
    console.log("Funcion init() se inicializo correctamente")
    document
    .querySelector('button')
    .addEventListener("click", function(event){
        buttonClick (event.target.innerValue)

    });
}

init();