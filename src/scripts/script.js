const sendMail = (ev) => {
  // Previnir o comportamento padrão do método onSubmit e não recarregar a página
  ev.preventDefault();
  
  // Declarar as variáveis do formulário
  const form = document.querySelector('#form');
  const inputs = document.querySelectorAll('input');
  const name = Array.from(inputs).find(input => input.name === 'name');
  const email = Array.from(inputs).find(input => input.name === 'email');
  const phone = Array.from(inputs).find(input => input.name === 'phone');
  const subject = Array.from(inputs).find(input => input.name === 'subject');
  const message = document.querySelector('#message');
  
  // Exibir alerta com as variáveis preenchidas
  alert(`
    Nome: ${name?.value}
    E-mail: ${email?.value}
    Telefone: ${phone?.value}
    Assunto: ${subject?.value}
    Mensagem: ${message?.value}`);
  
  // Resetar formulário
  form.reset();
}