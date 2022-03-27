const answer = document.querySelector('#answer');

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', () => {
  const nome = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  const programmingLanguage = document.querySelector(
    '#programming-language'
  ).value;

  if (nome == '' || age == '' || programmingLanguage == '') {
    answer.innerHTML = `Preencha todos os campos antes de continuar!`;
    return false;
  }
  answer.innerHTML = `Olá ${nome}! Você tem ${age} anos e está aprendendo ${programmingLanguage}.`;
});
