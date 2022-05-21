const translate = require("translate")

translate.engine = "google";
translate.key = process.env.DEEPL_KEY;

export const translator = async (sentence, targetLanguage , userLanguage) => {
  const translation = await translate(sentence, { to: targetLanguage, from: userLanguage });
  const fullTranslation = sentence + ' - ' + translation
  return fullTranslation;
}
