function mudaLimitador(limitadorId, contadorId) {
  const limitador = document.getElementById(limitadorId);
  const contador = document.getElementById(contadorId);
  counter.value = contador.textContent =
    "Caracteres Restantes: " + limitador.value + ".";
}
function contagemRegressiva(textareaId, contadorId, limitadorId) {
  const limiteCaracteres = document.getElementById(limitadorId).value;
  const contador = document.getElementById(contadorId);
  const textarea = document.getElementById(textareaId);
  textarea.maxLenght = limiteCaracteres;

  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = limiteCaracteres - caracteresDigitados;

  if (caracteresRestantes > 0) {
    contador.textContent = "Caracteres Restantes: " + caracteresRestantes + ".";
    contador.style.color = "white";
  } else if (caracteresRestantes == 0) {
    contador.textContent = "Caracteres Restantes: " + caracteresRestantes + ".";
    contador.style.color = "red";
  }

  if (caracteresDigitados >= limiteCaracteres) {
    textarea.value = textarea.value.substr(0, limiteCaracteres);
  }
}
