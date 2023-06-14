const form = document.getElementById('formulario');
let valorCampoB = document.getElementById('campo-b');
let valorCampoA = document.getElementById('campo-a');
let formEValido = false;

function bMaiorQueA(num1,num2){
    return num1 < num2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    
    const mensagemSucesso = `Pedido de compra realizado com sucesso!`;
    formEValido = bMaiorQueA(valorCampoA.valueAsNumber,valorCampoB.valueAsNumber);
    if (formEValido){
        const containerMenssagemSucesso = document.querySelector('.sucess-message');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        valorCampoA.value = '';
        valorCampoB.value = '';
    } else {
        
        document.querySelector('.error-message').style.display = 'block';
    }
})

valorCampoB.addEventListener('keyup', function(e){
    console.log(e.target.valueAsNumber);
    formEValido = bMaiorQueA( valorCampoA.valueAsNumber, e.target.valueAsNumber);

    if (!formEValido){
        valorCampoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorCampoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})