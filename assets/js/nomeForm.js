const nome = document.querySelector('.nome__focus')
const input = document.querySelector('.nome__input')



input.addEventListener('click', nomeForm)

function nomeForm(){
    nome.style.display = 'block';
    input.setAttribute('placeholder','')
}