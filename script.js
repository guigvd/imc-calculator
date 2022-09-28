//IMC = PESO / (ALTURA * ALTURA)

//Pega o elemento com o id que for passado

const calculaIMC = () => {

    const resultado = document.getElementById("resultado");
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (altura != '' && peso != '') {

        //Verifica se o que foi digitado são números
        if (isNaN(altura) || isNaN(peso)) {
            resultado.innerHTML = 'Digite números ò.Ó'

        } else {
            const imc = (peso / (altura * altura)).toFixed(2);

            let classification = ''

            if (imc < 18.5) {
                classification = 'Abaixo do peso'
            } else if (imc < 25) {
                classification = 'Peso normal'
            } else if (imc < 30) {
                classification = 'Acima do peso'
            } else if (imc < 35) {
                classification = 'Obesidade grau I'
            } else if (imc < 41) {
                classification = 'Obesidade grau II'
            } else {
                classification = 'Obesidade grau III'
            }

            resultado.innerHTML = `Seu IMC é de : ${imc}<br>${classification}`
        }
        
    } else {
        resultado.innerHTML = 'Campos vazios :('
    }

    //Chamando a função que exibe o modal com o resultado
    iniciaModal('modal-resultado');
}


function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
}

const close = (modalID) => {
    const modal = document.getElementById(modalID);
    modal.classList.remove('mostrar');
}

const closeModal = () => {
    close('modal-resultado')
}