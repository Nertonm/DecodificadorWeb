let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let input = document.getElementById("input");
let output = document.getElementById("output");

function descriptografar(text, subs = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
}) {
    return text.replace(/enter|imes|ai|ober|ufat/g, aaa => subs[aaa]);
}

function criptografar(text, subs = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
}) {
    return text.replace(/./g, char => subs[char] || char);
}

function checker(text) {
    return /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÇáéíóúàèìòùâêîôûãõç]/.test(text);
}

b1.addEventListener("click", () => {
    let inputText = input.value;
    if (checker(inputText)) {
        alert("O texto não pode conter letras maiúsculas ou caracteres acentuados.");
    } else {
        let criptografado = criptografar(inputText);
        output.value = criptografado;
        alert("Texto criptografado com sucesso!");
    }
});

b2.addEventListener("click", () => {
    let inputText = input.value;
    let descriptografado = descriptografar(inputText);
    output.value = descriptografado;
    alert("Texto descriptografado com sucesso!");
});

b3.addEventListener("click", () => {
  let outputText = output.value;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("Texto copiado para a área de transferência!");
  }).catch(err => {
    console.error('Erro ao copiar texto: ', err);
  });
});

