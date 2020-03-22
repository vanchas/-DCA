export const valueValidator = (string) => {
  try {
    if (string &&
      string.toString().trim().length &&
      Math.sign(+string) > 0 && 
      !isNaN(parseFloat(string))) {

      return parseFloat(string);

    } else {
      alert('Enter correct value. It must be a number');
      console.error('Enter correct value. It must be a number');
    }
  } catch (error) {
    // 
  }
}