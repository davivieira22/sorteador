
const button=document.querySelector(".botao")
const numero =document.querySelector(".resultado")




function geradorDeNumero() {


    const min = Math.ceil(document.querySelector(".input-direito").value)
    const max = Math.floor(document.querySelector(".input-esquerdo").value)
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  

 
    if (min > max) {
       numero.innerHTML=resultado
    }else{
        alert("O valor minimo precisa ser menor que o máximo!")  
    }


}


