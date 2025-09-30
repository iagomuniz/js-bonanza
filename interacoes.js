let MicroInteracao = {
    botao: document.querySelector("#botao"),
    textoSubstituivel: document.querySelector(".textoSubstituivel"),

    iniciar: function(){
        this.eventos();
    },

    eventos: function(){
        this.botao.addEventListener("click",
            () => {
                this.textoSubstituivel.style.opacity = 0;
                setTimeout(() =>{
                    this.textoSubstituivel.innerHTML = "A funcionalidade principal do JS é a interação com o usuário.<p>javascript serve para criar interações com os usuários. Algo que é até bem presente nos sites atuais.</p>"
                    this.textoSubstituivel.style.opacity = "100%";
                }, 2000);
            }
        )
    },
};

const topicos = document.querySelector(".topicos");
const navExplicacao = document.querySelector(".nav-btn-explicacao");

const SeletorDeTopico = {
    botoes: navExplicacao.querySelectorAll(".botao-arredondado"),
    topicos: topicos.querySelectorAll(".secao-explicacao"),

    iniciar: function(){
        this.eventos();
    },

    eventos(){
        for(let i = 0; i < this.botoes.length; i++){
            this.botoes[i].addEventListener("click", () => {
                for(let j = 0; j < this.topicos.length; j++){
                    if(i == j) continue;
                    this.topicos[j].classList.remove("selecionado");
                }
                this.topicos[i].classList.toggle("selecionado");
                this.botoes[i].classList.toggle("selecionado");
            })
        }
    }
}

const CaixaDeCookies = {
    btnNegar: document.querySelector(".botao-de-negar-cookies"),
    btnAceitar: document.querySelector(".botao-de-cookies"),
    DOM: document.querySelector(".cookie-footer"),
    iniciar: function(){
        this.eventos();
    },
    //por enquanto vamos fazer apenas o evento para sumir a caixa de cookies, não temos dados ainda para armazenar...
    eventos: function(){
        this.btnNegar.addEventListener("click", () => {
            this.DOM.style.display = "none";
            //document.cookies = "cookie=aceito";            
        });
        this.btnAceitar.addEventListener("click", () => {
            this.DOM.style.display = "none";
            //mainJogo();
        });
    }
}

function interacaoInline(){
    document.body.innerHTML = `<h1 style = "animation:none; text-align:center;">403 Forbbidden</h1>`;
    setTimeout(
        () => {
            document.body.innerHTML += `<p style = "animation:none; text-align:center;">ha! eu te peguei! Se bem que eu escrevi forbidden errado então...</p>`;
            setTimeout(

                () => {
                    document.body.innerHTML += `<p style = "animation:none; text-align:center;">Mas enfim, vamos voltar para a página inicial, isso tá começando à me trazer memórias ruins</p>`;
                    document.body.innerHTML += `<a style = "text-style: underline;" ondblclick="interacaoInline2()">voltar?</a>`;
                }, 8000
            )
        }, 4000
    );
}

function interacaoInline2(){
    document.body.innerHTML = `<h1 style = "animation:none; text-align:center;">503 Bad Gateway Error</h1>`;
    setTimeout(
        () => {
            document.body.innerHTML += `<p style = "animation:none; text-align:center;">ha! eu te peguei de novo! Nem tem server direito aqui...</p>`;
            setTimeout(
                () => {
                    document.body.innerHTML += `<p style = "animation:none; text-align:center;">Mas enfim, vamos voltar para a página inicial, isso tá começando à me trazer memórias ruins</p>`;
                    document.body.innerHTML += `<a href = ''>voltar?</a>`;
                }, 8000
            )
        }, 4000
    );
}

window.addEventListener('blur', ()=> {
        document.title = 'voltamos já!'
    }
);

function changeToRandomColor(element, min, max){
    element.style.background = `rgb(${numeroAleatorio(min, max)},${numeroAleatorio(min, max)},${numeroAleatorio(min, max)})`;
}

function mudarTamanhoDoInput(elemento, tamanho){
    elemento.style.width = `${tamanho}`;
}


MicroInteracao.iniciar();
CaixaDeCookies.iniciar();
SeletorDeTopico.iniciar();
//alert('olá mundo! bem vindo à mais um episodio de rever as bases do web development! Pra depois pular tudo pro react, node e os frameworks famosos!');