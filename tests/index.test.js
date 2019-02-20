const gocoder = require('../index');

describe('gocoder', () => {
  describe('constructor', () => {
    test('should return error if no api key is passed', () => {
      function start() {
        gocoder();
      }

      expect(start).toThrow('No API key provided');
    });
    test('should default to google maps api if no api option is passed', () => {
      expect(gocoder({api_key: 'fake'}).api).toBe('google');
    });
  });
});
