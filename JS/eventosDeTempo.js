//é o settimeout e o setInterval ou o getAnimationFrame neles podemos fazer um cronometro

const Cronometro = {
    tempo: 0,
    id: undefined,
    DOM: document.querySelector('.cronometro__tempo'),
    botoes: {
        iniciar: document.querySelector('#ativar'),
        parar: document.querySelector('#parar'),
        resetar: document.querySelector('#resetar')
    },
    iniciar: function(){
        if(this.id === undefined){
            this.id = setInterval(() => {
                this.tempo++;
                this.render();
            }, 100);
        }
    },
    parar: function(){
        clearInterval(this.id);
        this.id = undefined;
    },
    resetar: function(){
        this.tempo = 0;
        this.render();
    },
    eventos: function(){
        this.botoes.iniciar.addEventListener('click', () => {
            this.iniciar();
        });
        this.botoes.parar.addEventListener('click', () => {
            this.parar();
        });
        this.botoes.resetar.addEventListener('click', () => {
            this.resetar();
        })
    },
    render: function(){
        this.DOM.innerHTML = new Date(this.tempo * 100).toISOString().substring(11, 21);
        //this.DOM.innerHTML = this.tempo;
    }
}

Cronometro.eventos();
