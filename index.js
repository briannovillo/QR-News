const fs = require('fs');
const request = require('request');

const options = {
  method: "POST",
  url: "http://api.qrserver.com/v1/read-qr-code/",
  port: 80,
  headers: {
    "Content-Type": "multipart/form-data"
  },
  formData : {
    "file" : fs.createReadStream("./noticiadelarua.jpeg")
  }
};

request(options, function (err, res, body) {
  if(err) console.log(err);
  console.log(body);
});
