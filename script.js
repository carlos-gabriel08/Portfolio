function copyToClipboard() {
    // Seu endereço de e-mail
    var email = 'carlosgbs.dev@gmail.com';

// Cria um elemento de input oculto
  var inputElement = document.createElement('input');

  // Define o valor do input para o endereço de e-mail
  inputElement.value = email;

  // Adiciona o input ao corpo do documento
  document.body.appendChild(inputElement);

  // Seleciona o conteúdo do input
  inputElement.select();

  try {
      // Tenta copiar o conteúdo selecionado para a área de transferência
      document.execCommand('copy');

      // Cria um elemento de parágrafo para exibir a mensagem
      var messageElement = document.createElement('h6');
      messageElement.textContent = 'E-mail copiado para a área de transferência: ';

      // Adiciona o elemento de mensagem ao lado do botão
      var button = document.getElementById('copiar_email');
      button.insertAdjacentElement('afterend', messageElement);

      // Adiciona a classe de estilo para a mensagem
      messageElement.classList.add('mensagem-copiada');

      // Remove a mensagem após alguns segundos (opcional)
setTimeout(function() {
    messageElement.style.display = 'none'; // Esconde a mensagem
}, 3000); // Remove a mensagem após 3 segundos (ajuste conforme necessário)

  } catch (err) {
      console.error('Erro ao copiar para a área de transferência: ', err);
  } finally {
      // Remove o input do corpo do documento
      document.body.removeChild(inputElement);
  }
}
