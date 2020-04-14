//var nome ="Bruno";
//alert('Olá, seja bem vind(o)'+ nome);
// Dicionario
/*var pao ={marca:"pulman", embalagem:"plástica", cor:"azul"};
console.log(pao.cor);
alert(pao.marca);*/
/*
//Lista de dicionários
var listaMercadinho =[{item:"pao", marca: "pulman", preco:1.50},
{item:"chocolate", marca:"Cacau Show", preco: 7.00}];
console.log(listaMercadinho[0].preco.toFixed(2));*/
/*
//Condicionais
var magro = prompt("Qual seu peso? ");
if(magro <= 60){
    alert("Você é considerado esguio");
}else if(magro > 60 && magro <=80){
  
    alert("Voc~e é considerado magro");
}else if(magro > 80){
    alert("Você é considerado obeso");
}*/
/*
//repeticao
var jogar = 0;


while(jogar < 5){
     jogar++;
     let msg = alert("Mais um ponto ");
     alert(jogar);
     if(jogar>=5){
         let msg = alert("Você estourou a banca. Parabéns!");
         alert("Pontuação final:");
         alert(jogar);
        
     }
}*/

//Date()
var data = new Date();
alert(data.getHours()+ ":"+ (data.getMinutes()));
function cadastrar(){
   // alert("Cadastro feito com sucesso!");
    window.open("https://github.com/haileicristina/aula_bootstrap");
    
    
}

function trocar(elemento){
   // document.getElementById("mudanca").innerHTML="Mudou de texto";
   elemento.innerHTML = "Mudou de texto";
}
function voltar(elemento){
   // document.getElementById("mudanca").innerHTML="Texto";
   elemento.innerHTML = "Sinopse";
}
function funcaoChange(elemento){
    console.log(elemento.value);
  
}
        
    
