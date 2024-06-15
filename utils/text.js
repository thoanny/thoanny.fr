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

export const excerpt = (content, words, trailing = "...") => {
  const list = content.trim().split(" ");
  const truncate = list.slice(0, words).join(" ");
  const excerpt = truncate + trailing;
  const output = list.length > words ? excerpt : content;

  return output;
};
