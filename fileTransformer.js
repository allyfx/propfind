const path = require('path');

module.exports = {
  process(filename) {
    return {
      code: `module.exports =  ${JSON.stringify(path.basename(filename))};`,
    };
  },
};
