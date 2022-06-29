function comparar() {
    
    var firstNumber= parseInt(document.getElementById("valorA").value);
    console.log(firstNumber);

    
    var secondNumber= parseInt(document.getElementById("valorB").value);
    console.log(secondNumber);

    var somaNumeros= firstNumber + secondNumber

    var elementoResultado = document.getElementById("resultado")

    if (firstNumber == secondNumber && somaNumeros < 10 && somaNumeros < 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são iguais. Sua soma é " + somaNumeros + ", que é menor que 10";
      } else if (firstNumber == secondNumber && somaNumeros == 10 && somaNumeros < 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são iguais. Sua soma é " + somaNumeros + ", que é menor que 20";
      } else if (firstNumber == secondNumber && somaNumeros > 10 && somaNumeros == 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são iguais. Sua soma é " + somaNumeros + ", que é maior que 10";
      } else if (firstNumber == secondNumber && somaNumeros > 10 && somaNumeros < 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são iguais. Sua soma é " + somaNumeros + ", que é maior que 10 e menor que 20";
      } else if (firstNumber == secondNumber && somaNumeros > 10 && somaNumeros > 20){
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são iguais. Sua soma é " + somaNumeros + ", que é maior que 20";
      } else if (firstNumber != secondNumber && somaNumeros < 10 && somaNumeros < 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são diferentes. Sua soma é " + somaNumeros + ", que é menor que 10";
      } else if (firstNumber != secondNumber && somaNumeros > 10 && somaNumeros < 20) {
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são diferentes. Sua soma é " + somaNumeros + ", que é maior que 10 e menor que 20";
      } else if (firstNumber != secondNumber && somaNumeros > 10 && somaNumeros > 20){
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são diferentes. Sua soma é " + somaNumeros + ", que é maior que 20";
      } else if (firstNumber != secondNumber && somaNumeros > 10 && somaNumeros == 20){
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são diferentes. Sua soma é " + somaNumeros + ", que é maior que 10";
      } else if (firstNumber != secondNumber && somaNumeros == 10 && somaNumeros > 20){
        elementoResultado.innerHTML = "Os números " + firstNumber + " e " + secondNumber + " são diferentes. Sua soma é " + somaNumeros + ", que é menor que 20";
      }
    

}