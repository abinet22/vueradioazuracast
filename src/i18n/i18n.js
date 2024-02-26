import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { en } from './en';
import { fr } from './fr';

const messages = {
  en: en,
  fr: fr,
};

const app = createApp({});

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages,
});

app.use(i18n);

export default i18n;
