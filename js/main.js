/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

document.getElementById("input-phrase").addEventListener("keyup", autoValidate);
function autoValidate() {
  let phrase = document.getElementById("input-phrase");
  const correction = new RegExp("[^A-Za-z ]", "g");
  phrase.value = phrase.value.toLowerCase().replace(correction, "");
}

function encryptText(e) {
  e.preventDefault();
  let phrase = document.getElementById("input-phrase").value;
  phrase = phrase
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  document.getElementById("output-phrase").value = phrase;
  cleanUp();
}

function decryptText(e) {
  e.preventDefault();
  let phrase = document.getElementById("input-phrase").value;
  phrase = phrase
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  document.getElementById("output-phrase").value = phrase;
  cleanUp();
}

function copyText() {
  let phrase = document.getElementById("output-phrase");
  phrase.select();
  phrase.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(phrase.value);
}

function cleanUp() {
  document.getElementById("input-phrase").value = " ";
}
