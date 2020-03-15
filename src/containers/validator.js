export const valueValidator = (string) => {
  if (string && string.toString().trim().length) {
    return string;
  } else {
    console.error('Enter correct value');
  }
}