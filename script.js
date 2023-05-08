function mudaLimitador(limitadorId, contadorId) {
  const limitador = document.getElementById(limitadorId);
  const contador = document.getElementById(contadorId);
  counter.value = contador.textContent =
    "Caracteres Restantes: " + limitador.value + ".";
}
function limitadorCaractere(textareaId, contadorId, limitadorId) {
  const limiteCaracteres = document.getElementById(limitadorId).value;
  const contador = document.getElementById(contadorId);
  const textarea = document.getElementById(textareaId);
  textarea.maxLenght = limiteCaracteres;

  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = limiteCaracteres - caracteresDigitados;

  if (caracteresRestantes >= 0) {
    contador.textContent = "Caracteres Restantes: " + caracteresRestantes + ".";
    let porcentagem = (caracteresDigitados / limiteCaracteres) * 100;
    console.log(porcentagem);
    if(porcentagem >= 0 && porcentagem <= 50){
        contador.style.color = "#fff";
        console.log('Entrou 1');
    }else if( porcentagem > 51 && porcentagem < 99){
        contador.style.color = "#ffa500";
        console.log('Entrou 2');
    }else if (porcentagem == 100){
        contador.style.color = "#f00";
        contador.textContent = "Limite excedido.";
        console.log('Entrou 3');
    }
  }
  if (caracteresDigitados >= limiteCaracteres) {
    textarea.value = textarea.value.substr(0, limiteCaracteres);
  }
}
