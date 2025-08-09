document.addEventListener('DOMContentLoaded', ()=>{
    const botoes = document.querySelectorAll('[data-tab-button]');

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

})

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