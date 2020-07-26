const moment = require("moment");

const { db } = require("../database/db");
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

let id;

const helpers = {
  firstStep: (surname) => {
    return surname.charAt(0);
  },

  secondStep: (surname) => {
    for (let i = 0; i < surname.length; i++) {
      for (let v = 0; v < dbvocales.length; v++) {
        if (surname[i] === dbvocales[v]) {
          if (surname[i] !== surname[0]) {
            return surname.charAt(i);
          }
        }
      }
    }
  },

  thirdStep: (ssurname) => {
    return ssurname.charAt(0);
  },

  fourthStep: (fname) => {
    return fname.charAt(0);
  },

  fifthStep: (date) => {
    const day = moment(date).format("DD");
    const month = moment(date).format("MM");
    const year = moment(date).format("YY");
    return `${year}${month}${day}`;
  },

  sixthStep: (gender) => {
    return gender;
  },

  seventhStep: (state) => {
    return state;
  },

  eighthStep: (surname) => {
    for (let i = 0; i < surname.length; i++) {
      for (let c = 0; c < dbconsonantes.length; c++) {
        if (surname[i] === dbconsonantes[c]) {
          if (surname[i] !== surname[0]) {
            return surname.charAt(i);
          }
        }
      }
    }
  },

  ninthStep: async (curp, date) => {
    const year = moment(date).format("YYYY");

    if (year < 2000) {
      prefix = 0;
      id = 0;
      const verifyN = await db.get("curps").findLast({ curp: curp }).value();

      if (verifyN) {
        if (verifyN.Id.charAt(1) <= 9 && prefix === 0) {
          id = parseInt(verifyN.Id.charAt(1)) + 1;
          return `${prefix}${id}`;
        } else {
          id = 0;
          prefix = verifyN.Id.charAt(0) + 1;
          return `${prefix}${id}`;
        }
      }
      return `${prefix}${id}`;
    } else {
      prefix = "a";
      id = 0;
      const verifyL = await db.get("curps").findLast({ curp: curp }).value();
      if (verifyL) {
        if (verifyN.Id.charAt(1) <= 9) {
          id = parseInt(verifyL.Id.charAt(1)) + 1;
          return `${prefix}${id}`;
        } else {
          id = 0;
          return `${prefix}${id}`;
        }
      }
      return `${prefix}${id}`;
    }
  },
};

module.exports = helpers;
