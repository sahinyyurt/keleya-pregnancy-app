import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { MMKV } from 'react-native-mmkv';
import * as resources from './resources';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
const relativeTime = require('dayjs/plugin/relativeTime');

const storage = new MMKV();

const LANGUAGE_DETECTOR: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (_: string) => void) => {
    const language = storage.getString('user-language');
    const findBestAvailableLanguage = RNLocalize.findBestLanguageTag(
      Object.keys(resources),
    );
    if (language && language !== findBestAvailableLanguage?.languageTag) {
      callback(findBestAvailableLanguage?.languageTag || 'en');
    } else {
      callback(findBestAvailableLanguage?.languageTag || 'en');
    }
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    storage.set('user-language', language);
    dayjs.locale(language);
    dayjs.extend(relativeTime);
  },
};

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    ns,
    defaultNS,
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {},
      ),
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });

export default i18n;
