const resultado = document.querySelector('.resultado')
const igual = document.querySelector('.igual')

function insert(numero){
    resultado.innerHTML += numero;
}

function ac(){
    resultado.innerHTML = '';
}

function del(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirmar(){
    if (resultado.textContent){
    document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
    }
}