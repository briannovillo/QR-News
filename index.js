const generateQR = require('./generate');
const { deflateString } = require('./compress');
const fs = require('fs');

const compressTextAndGenerateQR = text => generateQR(deflateString(text));

//compressTextAndGenerateQR("Some text");

var text = fs.readFileSync('./inputs/short-input.txt','utf8');
compressTextAndGenerateQR(text);
