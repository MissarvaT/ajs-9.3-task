/* eslint-disable no-plusplus */
import ArrayBufferConverter from '../ArrayBufferConverter';

test('преобразует данные в строку', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  const buffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter();

  expect(arrayBufferConverter.toString(buffer)).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('возвращает данные', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  const buffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter();

  expect(arrayBufferConverter.load(buffer)).toBe(ArrayBuffer);
});
