const POSITION_LEVELS = [
  "Voluntary",
  "Entry-level",
  "Associate/Experienced",
  "Manager",
  "Director",
  "Executive/Museum Leadership",
  "Prefer not to answer",
];

const POSITION_TYPES = [
  "Full-time/ Permanent employee",
  "Part-time employee",
  "Temporary employee",
  "Seasonal employee",
  "Paid intern",
  "Unpaid intern",
  "Apprentice / Fellow",
  "Prefer not to answer",
];

const POSITION_CATEGORIES = [
  "Administration",
  "Conservation",
  "Collections Information and Management",
  "Curatorial",
  "Digital Strategy/Web Development (e.g., graphic design)",
  "Diversity/Equity/Inclusion (e.g., in job title/position description)",
  "Education",
  "Exhibition Design and Construction (includes Fabrication)",
  "Facilities / Operations",
  "Finance / Accounting",
  "Food services / Cafe",
  "Gardens/Grounds",
  "Human Resources",
  "Information Systems and Technology",
  "Janitorial",
  "Library",
  "Marketing/Public Relations/Communications",
  "Membership/Development (includes Event Planning)",
  "Museum Leadership (includes executive positions)",
  "Preparators/Art Handlers",
  "Public Engagement",
  "Publication/Editorial",
  "Registration",
  "Research and Evaluation",
  "Retail / Museum Store",
  "Rights/Reproduction (includes Photography)",
  "Security",
  "Visitor Services",
  "None of the above",
];

const DIRECT_EMPLOYMENT = [
  "Yes",
  "No, I’m employed by a government agency (e.g., city, county, state)",
  "No, I’m employed by a university or college",
];

const POSITION_ENDOWMENT = ["Yes", "No", "I don't know"];

const UNION = [
  "Yes, I am a union member for my museum job",
  "No, I have the option to be a union member for my museum job but have not chosen to join",
  "No, a union is not available for my museum job",
];

const POSITION_COMPENSATION_TYPE = [
  "Annual salary",
  "Hourly wage",
  "Stipend",
  "This is a voluntary (unpaid) position",
];

const POSITION_FAIRNESS_AT_ORG = [
  "Above others",
  "About the same as others",
  "Below others",
  "N/A, there aren't others in my institution with similar position level",
];

const POSITION_FAIRNESS_AT_OTHER_ORGS = [
  "Above others",
  "About the same as others",
  "Below others",
];

module.exports = {
  POSITION_TYPES,
  POSITION_LEVELS,
  POSITION_CATEGORIES,
  DIRECT_EMPLOYMENT,
  POSITION_ENDOWMENT,
  UNION,
  POSITION_COMPENSATION_TYPE,
  POSITION_FAIRNESS_AT_OTHER_ORGS,
  POSITION_FAIRNESS_AT_ORG
};