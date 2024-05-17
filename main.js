function calcularTotal() {
    
    var quantidadeMadeira = parseFloat(document.getElementById("quantidadeMadeira").value) || 0;
    var quantidadeCimento = parseFloat(document.getElementById("quantidadeCimento").value) || 0;
    var quantidadeTijolo = parseFloat(document.getElementById("quantidadeTijolo").value) || 0;

    var Total = 50*quantidadeMadeira+25*quantidadeCimento+20*quantidadeTijolo;

    var resultado = document.getElementById("valorFinal");

    resultado.innerText = Total;

    console.log(quantidadeMadeira);
    console.log(quantidadeCimento);
    console.log(quantidadeTijolo);
    console.log(resultado);
    console.log(Total);
    
    
}
