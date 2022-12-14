//This file holds the functions to generate random numbers for each question.
//Reference: https://docs.google.com/spreadsheets/d/1l-831rVtQ0gDN6RcPKvq0eqro_KvWgNK/edit#gid=1400163921

// This will only cover the first _ questions from the excel sheet

//   TYPES
//   POSITION_TYPES,
//   POSITION_LEVELS,
//   POSITION_CATEGORIES,
//   DIRECT_EMPLOYMENT,
//   POSITION_ENDOWMENT,
//   UNION,
//   POSITION_COMPENSATION_TYPE,
//   POSITION_FAIRNESS_AT_OTHER_ORGS,
//   POSITION_FAIRNESS_AT_ORG

const questionTypes = require("./question-types");

//Max years possible
const YEAR_MULTIPLYER = 70;

//Max money possible
const MONEY_MULTIPLYER = 1000000;

//For checkbox questions (thses questions allow more than one selection) the maximum random increase that can be applied
const RANDOM_INCREASE_MAX = 0.3;

let org_id_counter = 1;
let field_id_counter = 1;

//Generates a uniform distribution accross some empty array,
//All numbers in array will sum to 1
function generateUniformDistribution(enumeration) {
  let size = enumeration.length;
  let array = Array(size);

  let sum = 0;

  for (var i = 0; i < array.length; i++) {
    let random = Math.random();
    array[i] = random;
    sum += random;
  }

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] / sum;
  }

  return array;
}

// Generates key value pairs for an enumeration type for the given input array
function generateKeyValuePairs(enumeration, dataArray) {
  data = {};

  //Generate key value pairs
  for (var i = 0; i < dataArray.length; i++) {
    key = enumeration[i];
    value = dataArray[i];
    data[key] = value;
  }

  return data;
}

//function taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generateRandomIncreases(array) {
  //For loop that loops arbitrary amount of times
  for (var i = 0; i < getRandomInt(0, Math.floor(array.length / 2)); i++) {
    //During the loop, get a random index...
    index = getRandomInt(0, array.length);
    //Then increment that index by RANDOM_INCREASE_MAX;
    array[index] = array[index] + Math.random() * RANDOM_INCREASE_MAX;
  }

  return array;
}

// For generating data for questions with radial button options (Employees can only select one option on survey)
function generateRadialBtnData(enumeration) {
  array = generateUniformDistribution(enumeration);
  pairs = generateKeyValuePairs(enumeration, array);
  return pairs;
}

// For generating data for questions with checkbox button options (Employees can select multiple options on survey)
function generateCheckboxBtnData(enumeration) {
  //First generate a uniform distribution just like radial button
  array = generateUniformDistribution(enumeration);

  //Randomly select a few indexes and increase by random amount
  array = generateRandomIncreases(array);

  pairs = generateKeyValuePairs(enumeration, array);

  return pairs;
}
//Question One
//Avg yrs working in art museum field: YEARS - FLOAT
function genOne() {
  data = Math.random() * YEAR_MULTIPLYER;

  return data;
}

//Question Two
//Avg yrs working at current museum: YEARS - FLOAT
function genTwo() {
  data = Math.random() * YEAR_MULTIPLYER;
  return data;
}

//Question Three
//Current level position: % IN EACH RESPONSE OPTION
function genThree() {
  //First, randomize questions
  enumeration = questionTypes.POSITION_LEVELS;
  data = generateRadialBtnData(enumeration);

  return data;
}

//Question Four
//Type of position: % IN EACH RESPONSE OPTION
function genFour() {
  enumeration = questionTypes.POSITION_TYPES;
  data = generateRadialBtnData(enumeration);

  return data;
}

//Question Five, can select more than one option so doesn't need to add up to 1 but for now it will
//Category of museum position: % IN EACH RESPONSE OPTION
function genFive() {
  enumeration = questionTypes.POSITION_CATEGORIES;
  //CHANGE THIS TO generateCheckboxBtnData WHEN THAT FUNCTION IS FINISHED
  data = generateCheckboxBtnData(enumeration);
  return data;
}

//Question six
//Can an employee be a union member: % IN EACH RESPONSE OPTION
function genSix() {
  enumeration = questionTypes.UNION;
  data = generateRadialBtnData(enumeration);
  return data;
}

//Question seven
//How are you compensated: % IN EACH RESPONSE OPTION
function genSeven() {
  enumeration = questionTypes.POSITION_COMPENSATION_TYPE;
  data = generateRadialBtnData(enumeration);
  return data;
}

//Question eight
//Gross annual income from museum job: DOLLARS - INTEGER
function genEight() {
  data = Math.floor(Math.random() * MONEY_MULTIPLYER);
  return data;
}

//Question nine
//"Compared to people at similar position levels at MY MUSEUM I think my salary is...": % IN EACH RESPONSE OPTON ACROSS ORGS
function genNine() {
  enumeration = questionTypes.POSITION_FAIRNESS_AT_ORG;
  data = generateRadialBtnData(enumeration);
  return data;
}

//Question ten
//"Compared to people at similar position levels at OTHER MUSEUMS I think that my salary is...": % IN EACH RESPONSE OPTION ACROSS ORGS
function genTen() {
  enumeration = questionTypes.POSITION_FAIRNESS_AT_OTHER_ORGS;
  data = generateRadialBtnData(enumeration);
  return data;
}

//Question 11
//Average Rate of Promotion (Title change and pay increase beyond CoL): Float
function genEleven() {
  promotions = getRandomInt(1, 6);
  avgYrsWorked = Math.random() * YEAR_MULTIPLYER;

  return promotions / avgYrsWorked;
}

//Question 12
//How many times have you recieved a promotion? : % in each category
function genTwelve() {
  return;
}

//Question 13
//Does your compensation cover living expenses? : % in each category
function genThirteen() {
  enumeration = questionTypes.LIVING_EXPENSES;
  data = generateRadialBtnData(enumeration);

  return data;
}

//Question 14
//COVID return-to-work policy : % in each category (checkbox)
function genFourteen() {
  enumeration = questionTypes.WORK_FROM_HOME;
  data = generateCheckboxBtnData(enumeration);

  return data;
}

//Question 15
//Museum culture : % in each category, point system
function genFifteen() {
  enumeration = questionTypes.CULTURE;
  array = Array(enumeration.length);
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.random() * 2 - 1;
  }

  data = generateKeyValuePairs(enumeration, array);
  console.log(array);
  console.log(data);
  data.id = 1;
  return data;
}

const questionList = [
  { function: genOne, graph: "Bar", type: "year" },
  { function: genTwo, graph: "Bar", type: "year" },
  { function: genThree, graph: "Area", type: "radio" },
  { function: genFour, graph: "Area", type: "radio" },
  { function: genFive, graph: "Area", type: "checkbox" },
  { function: genSix, graph: "Spline", type: "radio" },
  { function: genSeven, graph: "Spline", type: "radio" },
  { function: genEight, graph: "Bar", type: "radio" },
  { function: genTen, graph: "Bar", type: "radio" },
  { function: genEleven, graph: "Bar", type: "radio" },
  { function: genTwelve, graph: "Bar", type: "radio" },
  { function: genThirteen, graph: "Bar", type: "radio" },
  { function: genFourteen, graph: "Bar", type: "checkbox" },
  { function: genFifteen, graph: "Bar", type: "radio" },
];

let orgAggregate = [];
let fieldAggregate = [];

for (var i = 0; i < questionList.length; i++) {
  orgAggregate.push({
    id: i + 1,
    data: [questionList[i].function()],
    question_name: `Question ${i + 1}`,
    graph_type: questionList[i].graph,
    question_type: questionList[i].type,
  });
}

for (var i = 0; i < questionList.length; i++) {
  fieldAggregate.push({
    id: i + 1,
    data: [questionList[i].function()],
    question_name: `Question ${i + 1}`,
    graph_type: questionList[i].graph,
    question_type: questionList[i].type,
  });
}

allAggregates = { ORG: orgAggregate, field: fieldAggregate };

//Export our JSON
module.exports = {
  allAggregates,
};
