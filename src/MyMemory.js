const axios = require('axios');

class MyMemory {
  constructor({ url, username, password }) {
    this.url = url;
    this.username = username;
    this.password = password;
  }

  /**
   * Call https://api.mymemory.translated.net/ endpoint to translate the given text
   *
   * @param {*} text
   * @param {string} fromLang   - original text language
   * @param {string} toLang     - desire text language
   */
  async translateText(text, fromLang, toLang) {
    const url = `${this.url}/get?q=${text}&langpair=${fromLang}|${toLang}`;

    const response = await axios.get(url);

    return response.data.responseData.translatedText;
  }

  /**
   * Call https://api.mymemory.translated.net/keygen?user=username&pass=password
   * to generate a key with username and password. API request limit to MyMemory
   * is extended with authenticated call.
   *
   * @param {*} username
   * @param {*} password
   */
  async generateKeyGen(username, password) {
    throw new Error('Not implemented...');
  }

  /**
   * Contribute to MyMemory Translation
   *
   * @param {*} originalText
   * @param {*} translatedText
   * @param {*} fromLang
   * @param {*} toLang
   */
  async contributeTranslation(originalText, translatedText, fromLang, toLang) {
    const url = `${this.url}/set?seg=${originalText}&tra=${translatedText}&=${fromLang}|${toLang}`;

    throw new Error('Not implemented...');
  }
}

module.exports = MyMemory;
