//quando a página for lançada
document.addEventListener(
    'DOMContentLoaded',
    function (){
        const botoes = document.querySelectorAll('[data-tab-button]');
        const hero_section = document.querySelector('.hero');
        const altura_hero = hero_section.clientHeight;

        window.addEventListener('scroll', function(){
            const posicao_atual = window.scrollY;
            if(posicao_atual < altura_hero){
                oculta_elemento_header();
            }else{
                exibe_elemento_header();
            }
        })

        for(let i = 0; i < botoes.length; i++){
            botoes[i].addEventListener('click', function(botao){
                const aba_alvo = botao.target.dataset.tabButtom;
                const aba = document.querySelector(`[data-tab-id=${aba_alvo}]`);
                esconde_todas_abas();
                aba.classList.add('shows_list--is-activate');
                remove_botao_ativo();
                botao.target.classList.add('shows__tabs__button--is-active');
            })
        }
        function esconde_todas_abas(){
            const tabs_container = document.querySelectorAll('[data-tab-id]');
            for(let i =0; i < tabs_container; i++){
                tabs_container[i].classList.remove('shows__list--is-active');
            }
        }

        function remove_botao_ativo(){
            const botoes = document.querySelectorAll('[data-tab-button]');
            for(let i =0; i < botoes.length; i++){
                botoes[i].classList.remove('shows__tabs__button--is-active');
            }
        }

        function oculta_elemento_header(){
            const header = document.querySelector('header');
            header.classList.add('header--is-hidden');
        }


        function exibe_elemento_header(){
            const header = document.querySelector('header');
            header.classList.remove('header--is-hidden');
        }
    }
)
//fim página