const btn = document.querySelector('.btn');
const campoBusca = document.querySelector('.cabecalho__busca')
const login = document.querySelector('.cabecalho__login')
const titulo = document.querySelector('.cabecalho__titulo')
const cabecalho = document.querySelector('.cabecalho')

const btnBusca = document.querySelector('.btnBusca');
const busca = document.querySelector('#busca')
const largura = window.screen.availWidth;

console.log(largura)
btn.addEventListener("click", abreBusca)

btnBusca.addEventListener("click", fechaBusca)

function abreBusca(event){
    event.preventDefault()
    campoBusca.style.display='block';
    login.style.display='none';
    titulo.style.display='none';
    btn.style.display='none';
    cabecalho.style.justifyContent = 'center';
    cabecalho.style.padding='0';
    btnBusca.style.display='none';
}

function fechaBusca (event){
    event.preventDefault()
    if (busca.value=="" && largura < 768){
        campoBusca.style.display='none';
        login.style.display='flex';
        titulo.style.display='flex';
        btn.style.display='block';
        cabecalho.style.justifyContent = 'space-between';
        cabecalho.style.padding='1.5em'
    }else if (busca.value =!""){
        busca.value='sera implementado'
    }
}