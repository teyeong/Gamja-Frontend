export const parsePhoneNumber = (input: string) => {
  const digits = input.replace(/\D/g, '');

  if (digits.length >= 3 && digits.length < 7) {
    return `(${digits.substring(0, 3)}`;
  } else if (digits.length >= 7 && digits.length < 11) {
    return `(${digits.substring(0, 3)})-${digits.substring(3, 7)}`;
  } else if (digits.length >= 11) {
    return `(${digits.substring(0, 3)})-${digits.substring(3, 7)}-${digits.substring(7, 11)}`;
  } else {
    return digits;
  }
};
