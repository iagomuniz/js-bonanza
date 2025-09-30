//sliding puzzle

class Peca{
    constructor(x, y, cor, nome){
        this.largura = 100;
        this.altura = 100;
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.nome = nome;
    }
}

class Grade{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
        this.grid = new Array(altura);
        for(let i = 0; i < altura; i++){
            this.grid[i] = new Array(largura);
        }
    }
    setPeca(peca){
        if(!peca.y >= 0 && !peca.y < this.altura && !peca.x >= 0 && !peca.x < this.largura){
            coluna = coluna % this.largura;
            linha = linha % this.altura;
        }
        this.grid[linha][coluna] = peca;
    }
    moverPeca(x, y){
        //a peca deve checar se ela pode se mover
        if(x < 0 || x >= this.largura || y < 0 || y >= this.altura){
            return;
        }
        else if(x+1 < this.largura && this.grid[y][x+1] == undefined){
            this.grid[y][x+1] = this.grid[y][x];
            this.grid[y][x] = undefined;
        }
        else if(x-1 >= 0 && this.grid[y][x-1] == undefined){
            this.grid[y][x-1] = this.grid[y][x];
            this.grid[y][x] = undefined;
        }
        else if(y+1 < this.altura && this.grid[y+1][x] == undefined){
            this.grid[y+1][x] = this.grid[y][x];
            this.grid[y][x] = undefined;
        }
        else if(y-1 >= 0 && this.grid[y-1][x] == undefined){
            this.grid[y-1][x] = this.grid[y][x];
            this.grid[y][x] = undefined;
        }
        //se puder, ela deve se mover
        //se nao puder, ela deve fazer nada

    }
}

const grade = new Grade(4, 4);

function desenharGrade(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, grade.largura*grade.tamanho, grade.altura*grade.tamanho);
    for(let i = 0; i < grade.altura; i++){
        for(let j = 0; j < grade.largura; j++){
            if(grade.grid[i][j] != undefined){
                ctx.fillStyle = grade.grid[i][j].cor;
                ctx.fillRect(j*grade.tamanho, i*grade.tamanho, grade.tamanho, grade.tamanho);
            }
        }
    }
}

function numeroAleatorio(max){
    return Math.floor(Math.random() * max);
}

function mainJogo(){
    let espacoLivreX = numeroAleatorio(grade.largura), espacoLivreY = numeroAleatorio(grade.altura);
    grade.grid[numeroAleatorio(grade.altura)][numeroAleatorio(grade.largura)] = new Peca("red");
    desenharGrade();
}