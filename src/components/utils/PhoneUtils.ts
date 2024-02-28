export const parsePhoneNumber = (input: string) => {
  const digits = input.replace(/\D/g, '');

  if (digits.length >= 4 && digits.length < 8) {
    return `${digits.substring(0, 3)}-${digits.substring(3)}`;
  } else if (digits.length >= 8 && digits.length < 12) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 7)}-${digits.substring(7)}`;
  } else if (digits.length > 11) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 7)}-${digits.substring(7, 11)}`;
  } else {
    return digits;
  }
};
