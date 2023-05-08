Aqui está um exemplo de README para o código fornecido:

# Limitador de caracteres em JavaScript

Este é um limitador de caracteres simples em **JavaScript**, que pode ser usado para restringir a entrada de texto em um campo de texto a um número máximo de caracteres. Ele usa eventos de teclado para atualizar dinamicamente o número de caracteres restantes e informar o usuário quando o limite é atingido.

## Como usar

Para usar o limitador de caracteres, basta copiar e colar o código HTML e JavaScript em seu projeto. Certifique-se de adicionar os IDs corretos aos elementos HTML para que o script possa acessá-los.

O HTML deve incluir um campo de entrada numérico para especificar o limite de caracteres e um campo de texto onde o usuário pode digitar o texto.

```html
<main>
  <div>
    <h1>Limitador de Caracteres</h1>
    <label for="limitador">Limitador</label>
    <input type="number" name="limitador" id="limitador" onkeyup="mudaLimitador(this.id, counter.id)" autofocus>
    <div class="group-textarea">
      <textarea
        name="campoTextArea"
        id="campoTextArea"
        cols="30"
        rows="10"
        onkeyup="contagemRegressiva(this.id, counter.id, limitador.id);"
      ></textarea>
      <span id="counter">Caracteres Restantes: </span>
    </div>
  </div>
</main>
```

O JavaScript deve incluir duas funções: uma para atualizar o número de caracteres restantes com base no limite especificado pelo usuário e outra para verificar o número de caracteres digitados e atualizar a contagem regressiva.

```javascript
function mudaLimitador(limitadorId, contadorId) {
  const limitador = document.getElementById(limitadorId);
  const contador = document.getElementById(contadorId);
  counter.value = contador.textContent = "Caracteres Restantes: " + limitador.value + ".";
}

function contagemRegressiva(textareaId, contadorId, limitadorId) {
  const limiteCaracteres = document.getElementById(limitadorId).value;
  const contador = document.getElementById(contadorId);
  const textarea = document.getElementById(textareaId);
  textarea.maxLength = limiteCaracteres;

  const caracteresDigitados = textarea.value.length;
  const caracteresRestantes = limiteCaracteres - caracteresDigitados;

  if (caracteresRestantes > 0) {
    contador.textContent = "Caracteres Restantes: " + caracteresRestantes + ".";
  } else if (caracteresRestantes == 0) {
    contador.textContent = "Caracteres Restantes: " + caracteresRestantes + ".";
    contador.style.color = "red";
  }

  if (caracteresDigitados >= limiteCaracteres) {
    textarea.value = textarea.value.substr(0, limiteCaracteres);
  }
}
```

## Personalização

Este limitador de caracteres pode ser personalizado de várias maneiras, incluindo:

- Alterar a mensagem de erro exibida quando o limite de caracteres é excedido.
- Alterar o estilo da mensagem de erro.
- Adicionar eventos personalizados para lidar com o limite de caracteres.

## Contribuindo

Se você quiser contribuir para este projeto, fique à vontade para enviar um pull request ou abrir uma issue. Todos os tipos de contribuições são bem-vindos, desde correções de bugs até novos recursos e melhorias de desempenho.
