const Relogio = {
    DOM: document.querySelector('.relogio'),
    saudacaoDOM: document.querySelector('.saudacao'),
    saudacoes: ["bom dia", 'boa tarde', 'boa noite'],
    hora: 0, minuto: 0, segundo: 0,
    decidirSaudacao(hora){
        if(hora < 12){
            return 0;
        } else if( hora < 18){
            return 1;
        } else {
            return 2;
        }
    },
    update(){
        setTimeout(() => {
            setTimeout(() => {
                this.update();
            }, 50);
            this.hora = new Date().getHours();
            this.minuto = new Date().getMinutes();
            this.segundo = new Date().getSeconds();
            this.DOM.innerHTML = `${this.hora}:${(this.minuto>9)?this.minuto:"0" + this.minuto}:${
                (this.segundo < 9)? "0" + this.segundo : this.segundo
            }`;
        }, 100)
    }
}

Relogio.update();

// formularios

const formulair = {
    DOM: document.querySelector('.form'),
    nome: document.querySelector('.form #input__nome'),
    email: document.querySelector('.form #input__email'),
    enviar: document.querySelector('.form #enviar'),
    dataNasc: document.querySelector('.form #data'),
    cor: document.querySelector('.form #cor'),
    postOutput: document.querySelector('.form__msg'),
    selection: document.querySelector('.form #select'),
    validar(){
        this.nome.value = this.nome.value.toLowerCase();
        if(this.nome.value == ""){
            this.postOutput.style.color = 'red';
            this.postOutput.innerHTML = 'Nome vazio';
            return false;
        }
        if(this.email.value == ""){
            this.postOutput.style.color = 'red';
            this.postOutput.innerHTML = 'Nome vazio';
            return false;
        }
        this.postOutput.innerHTML = this.nome.value + ', do email:  ' + this.email.value + ' seu formulario foi enviado com sucesso!';
        switch(this.cor.value){
            case '#ff0000':
                this.postOutput.style.color = 'red';
                break;
            case '#0000ff':
                this.postOutput.style.color = 'blue';
                break;
            case '#00ff00':
                this.postOutput.style.color = 'green';
                break;
            default:
                this.postOutput.style.color = 'black';
                break;
        }
        return true;
    },
}

function adicionarOpcoesFormulario(arr){
    for(let i = 0; i < arr.length; i++){
        formulair.selection.innerHTML += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
    }
}

function adicionarAnosAoSelect(min, max){
    for(let i = min; i <= max; i++){
        formulair.selection.innerHTML += '<option value="' + i + '">' + (min+max%i) + '</option>';
    }
}
adicionarAnosAoSelect(2000, 2120);