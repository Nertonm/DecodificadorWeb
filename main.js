let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
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

b1.addEventListener("click", () => {
    let inputText = input.value;
    let criptografado = criptografar(inputText);
    output.innerHTML =`<p class="mensagem">${criptografado}</p> <button class="btn-copiar">copiar</button>`;
    alert("Texto criptografado com sucesso!");
    const btCopiar = output.querySelector(".btn-copiar");
    btCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(criptografado);
    alert("Texto copiado para a área de transferência!");
  });
});

b2.addEventListener("click", () => {
    let inputText = input.value;
    let descriptografado = descriptografar(inputText);
    output.innerHTML =
    `<p class="mensagem">${descriptografado}</p>`;
    alert("Texto descriptografado com sucesso!");
});
