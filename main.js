function Celular(sistemaOperacional, modelo, memoria) {
    this.sistemaOperacional = sistemaOperacional;
    this.modelo = modelo;
    this.memoria = memoria;
    this.fotografar = function(){
        console.log("click");
    }
    
}


const celularDoJoao = new Celular("IOS","Iphone 14 PRO MAX", "512 Gb");
const celularDaMaria = new Celular("Android","Galaxy S22 Ultra", "256 Gb");
const celularDoPedro = new Celular("Android","Xiaomi Mi 13 Ultra", "1 Tb");


console.log(celularDoJoao);
console.log(celularDaMaria);
console.log(celularDoPedro);