document.addEventListener('DOMContentLoaded', ()=>{
    const botoes = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-tab-question');


    for(let i= 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', (botao)=>{
            const alvo = botao.target.dataset.tabButton;
            console.log('sou o alvo:', alvo);
            esconderAbas();
            const revelaDado = document.querySelector(`[data-tab-id= ${alvo}]`);
            revelaDado.classList.add('shows__list--is-active');
            removeBotãoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
            
        })
    }
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaElemento)
        
    }

})
function abreOuFechaElemento(elemento){
    const classe = 'faq__questions__item--is-open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;
    console.log(elementoPai);
    elementoPai.classList.toggle(classe);
}

function removeBotãoAtivo(){
    const botaoAtivo = document.querySelectorAll('[data-tab-button]');
    for(let i= 0; i<botaoAtivo.length; i++){
        botaoAtivo[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconderAbas(){
    const tabDataContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i< tabDataContainer.length; i++){
        tabDataContainer[i].classList.remove('shows__list--is-active')
    }
}