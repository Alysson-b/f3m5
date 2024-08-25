const input= document.getElementById('inputText')
const button = document.getElementById('buscar')
const div = document.getElementById('mostrar')
const p = document.createElement('p')

button.addEventListener('click', function(){

    const inputValue = input.value.trim();
    div.innerHTML = '';

    if(inputValue === ''){
        alert ('DIGITE ALGO')
    }else{

       const letraMaior =  identificar(inputValue);
       div.innerHTML = `<p>A maior letra é: ${letraMaior}</p>`
    }
})

function identificar(frase){

    const letras = frase.replace(/\s+/g, '').toLowerCase();

    if(letras.length === 0) return 'Nenhuma letra Encontrada'
    let ordem = letras[0];


    for (let i = 1; i < letras.length; i++){
        if(letras[i] > ordem){
            ordem = letras[i];
        }
    }
    return ordem.toUpperCase();
}