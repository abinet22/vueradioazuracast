import axios from 'axios';
import config from 'config';

const api_url = "https://ardiradio.com/https://api.textyl.co/api/lyrics?q=";

export default {
  serverTime: 0,
  async getLyrics(song) {
    try {
      const response = await fetch(api_url + encodeURI(song));
      if (response.ok) {
        this.serverTime = new Date(response.headers.get('date')).valueOf();
        const jsonValue = await response.json();
        return Promise.resolve(this._parseLyrics(jsonValue));
      } else {
        return Promise.reject('*** Cannot get lyrics');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
  _parseLyrics(lyrics) {
    let output = [];
    for (let item of lyrics) {
      let temp = {
        content: item.lyrics,
        time: item.seconds * 1000
      };
      output.push(temp);
    }
    return output;
  }
};
