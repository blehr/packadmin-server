const fs = require('fs');

const downloadController = () => {
  const downloadFile = (req, res) => {
    const filePath = `tmp/${req.params.file}`;
    const stream = fs.createReadStream(filePath, { bufferSize: 64 * 1024 });
    res.set('Content-type', 'application/pdf');
    res.set('Content-disposition', 'attachment');
    stream.pipe(res);
    stream.on('close', () => {
      fs.unlink(filePath);
    });

    console.log('filepath', filePath);
  };

  return {
    downloadFile,
  };
};

module.exports = downloadController;
