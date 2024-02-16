// prettier-ignore
export const lowercaseLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// prettier-ignore
export const uppercaseLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// prettier-ignore
export const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// prettier-ignore
export const symbols: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/"];

export const generatePassword = (
  modifiers: string[][],
  length: number,
  password: string = ""
  // lastModifierIndex: number = -1
): string => {
  if (length === 0) return password;

  // let currentModifierIndex: number;
  // do {
  const currentModifierIndex = Math.floor(Math.random() * modifiers.length);
  // } while (currentModifierIndex === lastModifierIndex);

  const randomChar: string =
    modifiers[currentModifierIndex][
      Math.floor(Math.random() * modifiers[currentModifierIndex].length)
    ];

  return generatePassword(
    modifiers,
    length - 1,
    password + randomChar
    // currentModifierIndex
  );
};
