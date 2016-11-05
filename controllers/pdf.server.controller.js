const pdf = require('html-pdf');
const fs = require('fs');

const pdfController = () => {
  const createPdf = (req, res) => {
    console.log(req.body.data);
    const html = req.body.data;
    pdf.create(html).toStream((err, stream) => {
      console.log(stream);
      stream.pipe(res);
    });
  };

  return {
    createPdf,
  };
};


module.exports = pdfController;
