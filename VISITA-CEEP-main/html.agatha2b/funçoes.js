function verificarNumero () {
    let numeroAleatorio = Math.random ()
    let numerotDigitado = document.getElementById('number').value;
    alert(inputDigitado)

    if (numeroAleatorio == numerotDigitado) 
    alert ('Parabéns, você acertou o número!');
} else { 
    alert("oh, que pena você errou, tente novamente!")}