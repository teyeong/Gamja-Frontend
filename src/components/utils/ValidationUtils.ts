export const validateId = (value: string) => {
  const expIdTest = /^[a-zA-Z0-9]{6,12}$/;
  return expIdTest.test(value);
};

export const validatePw = (value: string) => {
  const expPwTest =
    /^(?=.*[a-zA-Z])(?=.*\d|.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;
  return expPwTest.test(value);
};
