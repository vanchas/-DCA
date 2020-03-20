export const valueValidator = (string) => {
  if (string && string.toString().trim().length && Math.sign(+string) > 0) {
    return string;
  } else {
    console.error('Enter correct value');
  }
}