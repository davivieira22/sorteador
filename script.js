function geradorDeNumero() {

    const min = Math.ceil(document.querySelector(".input-direito").value)
    const max = Math.floor(document.querySelector(".input-esquerdo").value)
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;


alert(resultado)

}