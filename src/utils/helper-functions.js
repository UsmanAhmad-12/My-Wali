export function isValidEmail(str) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return emailRegex.test(str);
}

export function isInvalidPhoneNumber(str) {
  let phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  return !phoneNumberRegex.test(str);
}

export function isValidPassword(str) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(str);
}

export function isInvalidURL(url) {
  let urlRegex =
    /^(?:https?:\/\/(?:www\.)?|www\.)[a-z0-9]+(?:[-.][a-z0-9]+)*\.[a-z]{2,5}(?::[0-9]{1,5})?(?:\/\S*)?$/;

  return url.match(urlRegex) === null;
}

export function notValidNumber(str) {
  const reg = new RegExp('^[0-9]+$');

  return !reg.test(str);
}

export function ConsoleData(name, value) {
  console.log(`${name ? name : ""}:`, value ? value : "");
}
