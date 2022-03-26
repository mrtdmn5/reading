class StorageC {
  static addStorage(key, value) {
    let paragraphValue = this.getFromStorage(key);
    paragraphValue.push(value);
    localStorage.setItem(key, JSON.stringify(paragraphValue));
  }

  static getFromStorage(key) {
    let keyValues;
    if (localStorage.getItem(key) === null) keyValues = [];
    else keyValues = JSON.parse(localStorage.getItem(key));
    return keyValues;
  }

  static removeSeparatorFromStorage(separatorIndex, key) {
    let keyValues = this.getFromStorage(key);
    for (var i = 0; i < keyValues.length; i++) {
      if (keyValues[i] === separatorIndex) keyValues.splice(i, 1);
    }

    localStorage.setItem(key, JSON.stringify(keyValues));
  }
}
