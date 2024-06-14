export const nbsp = (str) => {
  return str.replace(/\s+([:;»!?/])|([«])\s+/g, (m, l, r) => {
    if (l) {
      return `\xa0${l}`;
    }
    if (r) {
      return `${r}\xa0`;
    }
  });
};
