/* eslint-disable class-methods-use-this */
export default class ArrayBufferConverter {
  load(buffer) {
    return buffer;
  }

  toString(buffer) {
    let string = '';
    const bufferView = new Uint8Array(buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      string += String.fromCharCode(bufferView[i]);
    }
    string = string.replace(/\s/g, '');
    return string;
  }
}
