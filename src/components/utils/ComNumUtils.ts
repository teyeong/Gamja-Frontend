export const parseComNum = (input: string) => {
  const digits = input.replace(/\D/g, '');

  if (digits.length >= 4 && digits.length < 6) {
    return `${digits.substring(0, 3)}-${digits.substring(3)}`;
  } else if (digits.length >= 6 && digits.length < 10) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5)}`;
  } else if (digits.length >= 10) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5, 10)}`;
  } else {
    return digits;
  }
};
