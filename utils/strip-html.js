import { stripHtml } from "string-strip-html";

export const stripExcerpt = (excerpt) => {
  return stripHtml(excerpt, {
    stripTogetherWithTheirContents: ["a"],
  }).result;
};

export const stripImageCaption = (caption) => {
  return stripHtml(caption, {
    ignoreTagsWithTheirContents: ["em"],
  }).result;
};
