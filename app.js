const dbvocales = ["a", "e", "i", "o", "u"];
const dbconsonantes = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "y",
  "z",
];
const vocales = [];
const consonantes = [];
const CURP = [];

const PN = prompt("ingrese primer nombre");
const PA = prompt("ingrese primer apellido");
const SA = prompt("ingrese segundo apellido");
const DD = prompt("dia de nacimiento");
const MM = prompt("mes de nacimiento");
const YY = prompt("año de nacimiento");
const SX = prompt("sexo");
let PNI = [];
let PAI = [];
let SAI = [];
let VPNI = "";
let VPAI = "";
let VSAI = "";

for (let i = 0; i < PA.length; i++) {
  for (let v = 0; v < dbvocales.length; v++) {
    if (PA[i] === dbvocales[v]) {
      vocales.push(PA[i]);
    }
  }
  for (let c = 0; c < dbconsonantes.length; c++) {
    if (PA[i] === dbconsonantes[c]) {
      consonantes.push(PA[i]);
    }
  }
}

if (vocales[0] === PA[0]) {
  CURP.push(PA[0], vocales[1]);
} else {
  CURP.push(PA[0], vocales[0]);
}

for (let i = 0; i < PA.length; i++) {
  for (let c = 0; c < dbconsonantes.length; c++) {
    if (PA[i] === dbconsonantes[c]) {
      PAI.push(PA[i]);
    }
  }
}

if (PAI[0] === PA[0]) {
  VPAI = PAI[1];
} else {
  VPAI = PAI[0];
}

for (let i = 0; i < SA.length; i++) {
  for (let c = 0; c < dbconsonantes.length; c++) {
    if (SA[i] === dbconsonantes[c]) {
      SAI.push(SA[i]);
    }
  }
}

if (SAI[0] === SA[0]) {
  VSAI = SAI[1];
} else {
  VSAI = SAI[0];
}

for (let i = 0; i < PN.length; i++) {
  for (let c = 0; c < dbconsonantes.length; c++) {
    if (PN[i] === dbconsonantes[c]) {
      PNI.push(PN[i]);
    }
  }
}

if (PNI[0] === PN[0]) {
  VPNI = PNI[1];
} else {
  VPNI = PNI[0];
}

CURP.push(SA[0], PN[0], YY, MM, DD, SX, VPAI, VSAI, VPNI);

console.log(CURP.join("").toUpperCase());
