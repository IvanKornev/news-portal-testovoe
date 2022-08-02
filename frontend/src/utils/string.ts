const cut = (text: string, size = 20) =>
  text.length <= size ? text : `${text.substring(0, size)}...`;

const getFirstLetter = (word: string): string => word[0].toUpperCase();

export const string = {
  cut,
  getFirstLetter,
};
