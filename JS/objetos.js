const carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2010,
    dimensoes: {
        comprimento: 4.2,
        largura: 1.8,
        altura: 1.5,
    },
    cor: 'Branco',
    placa: 'ABC1234',
    motor: {
        tipo: 'Flex',
        potencia: '1.0',
        cilindradas: '1000',
        combustivel: 'Gasolina',
    },
    buzinaStringada: "honk!",
    buzina: new Audio(),
    portas: 4,
    velocidade: new VelocidadeObjeto(220),
    portasAbertas: false,
    portaMalas: [],
    abrirPortas: function(entid) {
        this.portasAbertas = true;
    },
    adicionarAoPortaMalas: function(obj) {
        this.portaMalas.push(obj);
    },
    removerDoPortaMalas: function(obj) {
        this.portaMalas.pop(obj);
    },
    fecharPortas: function() {
        this.portasAbertas = false;
    },
    acelerar: function() {
        if(gasolina < 0) return;
        this.velocidade.x = this.velocidade.x + (cilindradas/0.5)*Number(this.motor.potencia);
        this.velocidade.y = this.velocidade.y + (cilindradas/0.5)*Number(this.motor.potencia);
    },
    freiar: function() {
        this.velocidade.x *= 0.8;
    },
    completo(){
        let finalString = "";
        finalString += "esse carro é um " + this.marca + " " + this.modelo + " " + this.cor + " e tem " + this.portas + " portas";
        finalString += "e tem " + this.portaMalas.length + " itens no porta malas";
        return finalString;
    },
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.dimensoes.comprimento, this.dimensoes.largura);
    }
}

let carroHtml = document.getElementById('carro-objeto');
carroHtml.innerHTML = carro.completo();

//aí temos os objetos com numerozinhos chamadas de Array (sim, caso você não saiba arrays são só um objeto que as chaves são numeros inteiros e possuem mais funções próprias)

// você pode declarar um array assim:
const arr = [];

// ou assim:
let arr2 = new Array();
arr2[0] = "laranja",
arr2[1] = "azul",
arr2[2] = "vermelho",
arr2[3] = "amarelo";

// ou pode fazer assim também ( mas tem limitações )
let arr3 = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}
//ao declarar arrays dessa forma você não pode adicionar ou remover itens do array, pois a função push e pop não foram declaradas aqui. isso mostra que arrays são objetos numerados, porém com funções reservadas para o propósito de arrays.

//sabendo disso podemos confundir todo mundo mostrando essa bizarrisse:
const ObjectArray = {
    length: 0,
    push: function(item){
        this[this.length] = item;
        this.length++;
    },
    pushAtIndex: function(index, item){
        this[index] = item;
        this.length++;
    },
    pop: function(){
        delete this[this.length - 1];
        this.length--;
    },
    popAtIndex: function(index){
        delete this[index];
        this.length--;
    },
    search: function(item){
        for(let i = 0; i < this.length; i++){
            if(this[i] == item){
                return i;
            }
        }
        return undefined;
    }
}
//ok agora esse objeto parece um array, temos funções de array e ele tem chaves de indice positivos e eles funcionam como um array (e até umas funções a mais que um array não tem), mas será que ele é um array mesmo? podemos testar isso com essa função:
//alert(Array.isArray(ObjectArray));
//e a resposta é: não! apesar do ObjectArray ter chaves de indice positivos e funções de array como push, pop e length, ele apenas parece um array na superfície, mas ele ainda não é um array, então o resultado é false.

// arrays começam sempre pelo indice 0, isso é valido para toda e qualquer linguagem de programação (exceto matlab)

// let ou const? o que acontece aqui é que a palavra chave const ou let se deve a referencia do array e não aos valores dele, então é possivel ainda mudar os valores de dentro do array. entretanto, a variavel em si não pode receber um novo array vazio. para realmente criar um array com todos os itens constantes você deverá congelar o array com o Object.freeze()

//arrays são tão objetos que você pode colocar funções dentro deles:

// e falando em maluquisses do javascript você pode criar um array com indices negativos. o que é meio ironico até. Em linguagens de programação como C++, o array é contiguo na memória, então não é possivel criar um array com indices negativos, já que o indice 0 é o primeiro elemento. Ao chamar o indice -1 você estaria acessando a memória anterior à criação do array o que faria o código funcionar de forma inesperada e puxar lixo de memoria ou ponteiros para lugares estranhos. em javascript é possivel por que arrays e objetos são encadeados, então o indice -1 não é o ultimo elemento do array e sim uma chave de nome "-1".

// você consegue imprimir no console o array em formato de tabela com o console.table()
