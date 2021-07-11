const buton = document.getElementById("button");
const body = document.getElementById("body");
const conteudo = document.createElement("div");
body.appendChild(conteudo);

const units = [
  "",
  "One ",
  "Two ",
  "Tree ",
  "For ",
  "Five ",
  "Six ",
  "Seven ",
  "Eigth ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Forteen ",
  "Fivteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
  "Twenty ",
];
const decenas = [
  "",
  "ten ",
  "twenty ",
  "thirty ",
  "forty ",
  "fifty ",
  "sixty ",
  "seventy ",
  "eighty ",
  "ninety ",
];

const cents = [
  "",
  "oneHundred ",
  "twoHundred ",
  "threeHundred ",
  "forHundred ",
  "fiveHundred ",
  "sixHundred ",
  "sevenHundred ",
  "eightHundred ",
  "nineHunred ",
];
let inp = 0;
let input = 0;
let frase = [];

button.addEventListener("click", function () {
  const valores = document.getElementById("number").value;
  for (let i = 0; i < valores; i++) {
    inp = i + 1;
    input = inp.toString();
    let unidad = units.splice(1, 1);
    frase.push(unidad);
    conteudo.innerText = frase;

    if (input > 20 && input < 99) {
      let idex = input.toString().split("");
      let decena = decenas.splice(idex[0], 1);
      let unidad = units.splice(idex[1], 1);
      let totalUnidades = `${decena}` + `${unidad}`;
      frase.concat(totalUnidades);
      //  console.log(totalUnidades);
      console.log(input);
      console.log(unidad);
      //conteudo.innerText = `${decena}` + `${unidad}`;
      //  conteudo.innerText = frase;
    }
  }
  });

