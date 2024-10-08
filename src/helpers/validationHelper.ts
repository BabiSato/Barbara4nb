export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isCapitalized = (name: string): boolean => {
  return name.length > 0 && name[0] === name[0].toUpperCase();
};

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z\s]+$/;
  return name.length >= 3 && nameRegex.test(name) && isCapitalized(name);
};

export const isValidLetter = (letter: string): boolean => {
  const letterRegex = /^[A-Za-z\s]+$/;
  return letter.length >= 3 && letterRegex.test(letter);
};
