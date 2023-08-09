function Celular (sistemaOperacional, marca) {
    this.sistemaOperacional = sistemaOperacional;
    this.marca = marca;
    
}

function Smartphone (sistemaOperacional, marca, modelo, memoria ) {
    this.modelo = modelo;
    this.memoria = memoria;

    Celular.call(this, sistemaOperacional,marca);
    
}

function TelefoneFixo (sistemaOperacional, marca, modelo, tipo){
    this.modelo = modelo;
    this.tipo = tipo

    Celular.call(this, sistemaOperacional,marca);
}


const celularDoJoao = new Smartphone("IOS","Apple","Iphone 14 PRO MAX", "512 Gb");
const celularDaMaria = new Smartphone("Android","Samsung","Galaxy S22 Ultra", "256 Gb");
const celularDoPedro = new TelefoneFixo("Sismens","IntelBrass","TS3111", "Sem fio");


console.log(`O celular do João é um `, celularDoJoao);
console.log(`O celular da Maria é um `,celularDaMaria);
console.log(`O celular do Pedro é um `,celularDoPedro);