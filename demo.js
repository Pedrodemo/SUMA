document.addEventListener('DOMContentLoaded', () =>{
    let num1=document.getElementById('num1');
    let num2=document.getElementById('num2');

    let bottonSumar=document.getElementById('sumar');
    let resultado=document.getElementById('resultado');

    bottonSumar.addEventListener('click', () => {
        const suma= parseFloat(num1.value) + parseFloat(num2.value);
        resultado.textContent=suma
    });
});