class MyMemory {
  /**
   * Call https://api.mymemory.translated.net/ endpoint to translate the given text
   *
   * @param {*} text
   * @param {string} fromLanguage   - original text language
   * @param {string} toLanguage     - desire text language
   */
  translateText(text, fromLanguage, toLanguage) {
    throw new Error('Not implemented...');
  }

  /**
   * Call https://api.mymemory.translated.net/keygen?user=username&pass=password
   * to generate a key with username and password. API request limit to MyMemory
   * is extended with authenticated call.
   *
   * @param {*} username
   * @param {*} password
   */
  generateKeyGen(username, password) {
    throw new Error('Not implemented...');
  }
}

module.exports = MyMemory;
