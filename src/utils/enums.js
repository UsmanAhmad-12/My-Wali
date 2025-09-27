export const Enums = {
  subscription_currency: { dollar: "USD" },
};


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
};

// error messages
export const ErrorMessages = {
  success: "success",
  updated: "Data updated successfully",
  failed: "Some error occured. Please try again later.",
  exist: "User already exist", // not in use rn
  not_exist: "Phone number not exist",
  exception: "Some exception occured",
  not_verified: "User not verified",
  token_required: "Token required. Login again please",
  token_invalid: "Session Expired.",
  time_out: "Timed Out",
  invalid_credentials: "Phone number or password is incorrect",
  invalid_password: "Invalid Password",
  invalid_code: "Invalid code.",
};
