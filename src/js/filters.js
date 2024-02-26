/**
 * Vue custom filters
 */

import { createApp } from 'vue';

const app = createApp();

// comma separate long numerical values
app.config.globalProperties.$filters = {
  toCommas: (num, decimals) => {
    let o = { style: 'decimal', minimumFractionDigits: decimals, maximumFractionDigits: decimals };
    return new Intl.NumberFormat('en-US', o).format(num);
  },
  // sanitize text data by only allowing alnums and some symbols
  toText: (str, def) => {
    str = String(str || '')
      .replace(/[^\w\`\'\-\,\.\!\?]+/g, ' ')
      .replace(/\s\s+/g, ' ')
      .trim();
    return str || String(def || '');
  },
  // Limit text length by number of characters
  str_limit: function (value, size) {
    if (!value) return '';
    value = value.toString();

    if (value.length <= size) {
      return value;
    }
    return value.substr(0, size) + '...';
  },
};

app.mount();

export default app;
