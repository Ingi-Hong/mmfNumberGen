// This will only cover the first 9 questions from the excel sheet, differs from actual survey

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

const questionTypes = require("./questionTypes");

const YEAR_MULTIPLYER = 70;
const MONEY_MULTIPLYER = 1000000;
//Generates a uniform distribution accross some empty array,
//All numbers in array will sum to 1
function generateDistribution(enumeration) {
  size = enumeration.length;
  array = Array(size);

  sum = 0;

  for (var i = 0; i < array.length; i++) {
    random = Math.random();
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

function generateData(enumeration) {
  array = generateDistribution(enumeration);
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
  return data ;
}

//Question Three
//Current level position: % IN EACH RESPONSE OPTION
function genThree() {
  //First, randomize questions
  enumeration = questionTypes.POSITION_LEVELS;
  data = generateData(enumeration);

  return data;
}

//Question Four
//Type of position: % IN EACH RESPONSE OPTION
function genFour() {
  enumeration = questionTypes.POSITION_TYPES;
  data = generateData(enumeration);

  return data;
}

//Question five, can select more than one option so doesn't need to add up to 1 but for now it will
//Category of museum position: % IN EACH RESPONSE OPTION
function genFive() {
  enumeration = questionTypes.POSITION_CATEGORIES;
  data = generateData(enumeration);
  return data;
}

//Question six
//Can an employee be a union member: % IN EACH RESPONSE OPTION
function genSix() {
  enumeration = questionTypes.UNION;
  data = generateData(enumeration);
  return data;
}

//Question seven
//How are you compensated: % IN EACH RESPONSE OPTION
function genSeven() {
  enumeration = questionTypes.POSITION_COMPENSATION_TYPE;
  data = generateData(enumeration);
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
  data = generateData(enumeration);
  return data;
}

//Question 10
//"Compared to people at similar position levels at OTHER MUSEUMS I think that my salary is...": % IN EACH RESPONSE OPTION ACROSS ORGS
function genTen() {
  enumeration = questionTypes.POSITION_FAIRNESS_AT_OTHER_ORGS;
  data = generateData(enumeration);
  return data;
}

functionList = [
  genOne(),
  genTwo(),
  genThree(),
  genFour(),
  genFive(),
  genSix(),
  genSeven(),
  genEight(),
  genNine(),
  genTen(),
];

orgAggregate = {};
fieldAggregate = {};

for (var i = 0; i < functionList.length; i++) {
  orgAggregate[(i + 1).toString()] = functionList[i];
}

for (var i = 0; i < functionList.length; i++) {
  fieldAggregate[(i + 1).toString()] = functionList[i];
}

e = { "ORG": orgAggregate, "field": fieldAggregate };

function createRandomAggregate() {}
module.exports = () => {
  const data = e;
  return data;
};
