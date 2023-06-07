function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = document.getElementById("resultado");

    switch (operacao) {
    case "+":
        resultado.innerHTML = "Resultado: " + (num1 + num2);
        break;
    case "*":
        resultado.innerHTML = "Resultado: " + (num1 * num2);
        break;
    case "-":
        resultado.innerHTML = "Resultado: " + (num1 - num2);
        break;
    case "/":
        if (num2 !== 0) {
        resultado.innerHTML = "Resultado: " + (num1 / num2);
        } else {
        resultado.innerHTML = "Não é possível dividir por zero.";
        }
        break;
    default:
        resultado.innerHTML = "Operação inválida.";
        break;
    }
    resultado.style.position = "fixed";
    resultado.style.left = Math.random() * window.innerWidth + "px";
    resultado.style.top = Math.random() * window.innerHeight + "px";
}
