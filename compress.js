const pako = require('pako');

const deflateString = (string) => pako.deflate(JSON.stringify(string), { to: 'string' });
const inflateString = (string) => JSON.parse(pako.inflate(string, { to: 'string' }));

module.exports = {
    deflateString,
    inflateString
};
