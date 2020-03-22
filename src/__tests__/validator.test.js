import { valueValidator } from "../validators/validator"

describe('validator function', () => {4

  it("if input value is empty, validator should nothing return and console.error 'Enter correct value. It must be a number' ", () => {
    expect(valueValidator()).toBe();
  })

  it("if input value is not a number, validator should nothing return and console.error 'Enter correct value. It must be a number' ", () => {
    expect(valueValidator(' afd sd fas ')).toBe(undefined);
  })

  it('if input value containes white space, validator should return only number', () => {
    expect(valueValidator(' 84315 ')).toBe(84315);
  })
})