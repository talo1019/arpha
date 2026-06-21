// Locale configuration for the Arpha site.
// `code` is the lowercase URL segment (/en, /zh-hant, …); `lang` is the BCP-47
// value for <html lang>; `label` is the English name shown in the language menu
// (matches the options requested in the nav language settings).
export const LOCALES = [
  { code: "en", lang: "en", label: "English", native: "English" },
  { code: "zh-hant", lang: "zh-Hant", label: "Traditional Chinese", native: "繁體中文" },
  { code: "ja", lang: "ja", label: "Japanese", native: "日本語" },
  { code: "en-au", lang: "en-AU", label: "Australian English", native: "English (AU)" },
  { code: "en-ca", lang: "en-CA", label: "Canada · EN", native: "Canada · EN" },
  { code: "fr-ca", lang: "fr-CA", label: "Canada · FR", native: "Canada · FR" },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const DEFAULT_LOCALE = "en";

export function isLocale(code) {
  return LOCALE_CODES.includes(code);
}

export function getLocale(code) {
  return LOCALES.find((l) => l.code === code) || LOCALES[0];
}

import en from "./dictionaries/en";
import zhHant from "./dictionaries/zh-hant";
import ja from "./dictionaries/ja";
import enAu from "./dictionaries/en-au";
import enCa from "./dictionaries/en-ca";
import frCa from "./dictionaries/fr-ca";

const DICTIONARIES = {
  en,
  "zh-hant": zhHant,
  ja,
  "en-au": enAu,
  "en-ca": enCa,
  "fr-ca": frCa,
};

export function getDictionary(code) {
  return DICTIONARIES[code] || DICTIONARIES[DEFAULT_LOCALE];
}
