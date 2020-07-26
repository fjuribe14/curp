const { db } = require("../database/db");
const { v4 } = require("uuid");
const {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  sixthStep,
  seventhStep,
  eighthStep,
  ninthStep,
} = require("../helpers/helper");

const generadorCtrl = {
  render: (req, res) => {
    res.render("generador");
  },

  post: async (req, res) => {
    const { fname, mname, surname, ssurname, gender, date, state } = req.body;
    const result1 = firstStep(surname);
    const result2 = secondStep(surname);
    const result3 = thirdStep(ssurname);
    const result4 = fourthStep(fname);
    const result5 = fifthStep(date);
    const result6 = sixthStep(gender);
    const result7 = seventhStep(state);
    const result8 = eighthStep(surname);
    const result9 = eighthStep(ssurname);
    const result10 = eighthStep(fname);
    const curp = `${result1}${result2}${result3}${result4}${result5}${result6}${result7}${result8}${result9}${result10}`;
    const result11 = await ninthStep(curp.toUpperCase(), date);
    const newCurp = {
      _id: v4(),
      Id: result11,
      fname,
      mname,
      surname,
      ssurname,
      gender,
      date,
      state,
      curp: curp.toUpperCase(),
      createdAt: Date.now(),
    };
    await db.get("curps").push(newCurp).write();
    res.render("result", { newCurp });
  },
};

module.exports = generadorCtrl;
