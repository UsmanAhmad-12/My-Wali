export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const STRIPE_PUBLISH_KEY =
  "pk_test_51OTJBlEo8iosrTHKqAi6N7zsnZUV0Jw3z4MoAuN3PyhFStxyNAQ2F0ydpc4g8SGeGudLU5UQXlWu8lGUZFetfFk300Fuq8KRYY";
export const APP_NAME = "Marriage App";
export const GOOGLE_MAP_API_KEY = "AIzaSyAGpL9qLO2D5V6ToKYEvAQZ7YymBRmB9Pk";

// Lookup parent_id Variables
export const RELATIONSHIP = 5;
export const PROFESSION = 19;
export const EDUCATIONS = 120;
export const NATIONALITIES = 394;
export const LANGUAGES = 585;
export const INDUSTRIES = 686;
export const RELIGION_GROUP = 837;
export const MADHAB_GROUP = 848;
export const BIOGRAPHY = 858;
export const ETHNICITY = 1056;
export const FAMILY_ORIGIN = 21;
export const OCCUPATION = 20;
export const HOBBIES = 2132;

// enums values arrays for profiles data not in use rn
//#region
export const RELIGIOUS_LEVEL = [
  "You only live once but do believe",
  "Do my bit but Allah is merciful",
  "Striving to do better",
  "Preparing not for the akhirat",
];
export const PRAY_LEVEL = ["Struggling", "I try but time escape me", "Always"];
export const COOKING_SKILL = [
  "Burnt food",
  "Beans on toast",
  "Course meal",
  "I can cook better",
];
export const EDURANCE_LEVEL = ["Coach potatoe", "Multi tasker", "Go getter"];
export const CLEANLINESS_LEVEL = [
  "Messy but clean",
  "Clean and organized",
  "Ocd",
];
export const DIY_SKILL = ["Call the builders", "Change a lightbulb", "Dr. diy"];
export const MARTIAL_STATUS = [
  "Never married",
  "Widowed",
  "Divorced",
  "Islam allows",
];
export const RELOCATION = ["No", "May be", "Yes"];
export const HOUSING_SITUATION = [
  "Living with parents",
  "Depends",
  "Independent",
];
export const PLAN_TO_MARRIAGE = ["In 0-1 year", "In 1-2 year", "In 3+ year"];
//#endregion

export const LOGIN_USER = "userLoginData"; //Local storage user name
export const CARDS_LIMIT = 50; // limit of cards per day for normal user on dashboard
export const CARDS_SWIPE_LIMIT = 25; // limit of swiping cards for non premium user

// Error codes
export const ErrorCode = {
  success: 0,
  updated: 1,
  failed: 2,
  exist: 3, // not in use rn
  not_exist: 4,
  exception: 5,
  not_verified: 6,
  token_required: 7,
  token_invalid: 8,
  time_out: 9,
  invalid_cred: 10,
  invalid_password: 11,
  seeker_not_exist: 12,
  invalid_code: 13,
  sent: 1,
  password_exist: 15,
  password_not_exist: 16,
  incomplete_profile: 14, //already exist and verified for gaurdian
  not_sent_invitation_yet: 17, //User have not sent any invitaion yet
  relation_not_provided: 18,
  selfie_identification: 19,
  user_is_not_guardian: 20,
  user_is_not_seeker: 21,
  verified: 22, //already exist and verified but incomplete profile
};

// error messages

export const ErrorMessages = {
  success: "success",
  updated: "Data updated successfully",
  failed: "Some error occured. Please try again later.",
  exist: "User already exist", // not in use rn
  not_exist: "Phone number not exist",
  exception: 5,
  not_verified: "User not verified",
  token_required: "Token required. Login again please",
  token_invalid: "Session Expired.",
  time_out: "Timed Out",
  invalid_credentials: "Phone number or password is incorrect",
  invalid_password: "Invalid Password",
  seeker_not_exist: 12,
  invalid_code: "Invalid code.",
  sent: 1,
  password_exist: 15,
  password_not_exist: 16,
  not_sent_invitation_yet: 17,
  relation_not_provided: 18,
  selfie_identification: 19,
  user_is_not_guardian: "Gaurdian phone already exist as seeker",
  user_is_not_seeker: "Seeker phone already exist as gaurdian",
  verified: "Phone number already exist", //already exist and verified but incomplete profile
  verified_seeker: "Seeker's phone number already exist",
  incomplete_profile: "Your profile information is missing", //already exist and verified for gaurdian
  invalid_password_format:
    "Password should contain atleast 8 Characters 1 number and 1 special character",
};
