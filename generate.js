const QRCode = require('qrcode');

const generateQR = async text => {
    try {
        QRCode.toFile(Date.now() + '.png', text,function (err) {
            if (err) throw err;
            console.log('done');
        })
    } catch (err) {
        console.error(err)
    }
};

module.exports = generateQR;
