const palco = document.querySelector('#palco');
const numObj = document.querySelector('#num-objetos');

function numAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class bola{
    constructor(x, y, tamanho, cor){
        this.x = x;
        this.y = y;
        this.tamanho = tamanho;
        this.velocidade = {x: 0, y: 0};
        this.cor = cor;
        this.elemento = null;
    }
}

const Palco = {
    DOM: palco,
    largura: palco.offsetWidth,
    altura: palco.offsetHeight,
    fisica(){
        this.objetos.forEach(obj => {
            obj.x += obj.velocidade.x;
            obj.y += obj.velocidade.y;
            obj.elemento.style.left = `${obj.x}px`;
            obj.elemento.style.top = `${obj.y}px`;
            if(obj.x + obj.tamanho > this.largura){
                obj.velocidade.x = -obj.velocidade.x;
            }
        });
    },
    objetos: [],
    numObjetos: 0,
};

const Controles = {
    btn_rm: document.getElementById('btn_rm'),
    btn_add: document.getElementById('btn_add'),
    input__qtd: document.getElementById('txt__qtd'),
    eventos(){
        this.btn_add.addEventListener('click', (e) => {
            const qtd = Number.parseInt(this.input__qtd.value);
            for(let i = 0; i < qtd; i++){
                Palco.objetos.push(new bola(numAleatorio(0, Palco.largura), numAleatorio(0, Palco.altura), numAleatorio(10, 50), `rgb(${numAleatorio(0, 255)}, ${numAleatorio(0, 100)}, ${numAleatorio(0, 255)})`));
            }
            Palco.numObjetos += qtd;
        })
        this.btn_rm.addEventListener('click', (e) => {
            this.input__qtd.value = 0;
            Palco.objetos.map((b) => {
                
            });           
        })
        this.input__qtd.addEventListener('change', (e) => {
            
        })
    }
};

window.addEventListener('resize', (e) => {
    Palco.altura = palco.offsetHeight;
    Palco.largura = palco.offsetWidth;
});

Controles.eventos();