const pdf = require('html-pdf');
const fs = require('fs');

const pdfController = () => {
  const createPdf = (req, res) => {
    const html = req.body.data.elem;
    res.set('Content-type', 'application/pdf');
    res.set('Content-disposition', 'attachment');
    const options = {
      format: 'Letter',
      orientation: 'portrait',
      border: {
        top: '0',
        bottom: '.5in',
        right: '.5in',
        left: '.5in',
      },
      type: 'pdf',
      header: {
        height: '.5in',
        contents: '<div style="text-align: center;"><h4>Pack Admin</h4></div>',
      },
    };
    pdf.create(html, options).toStream((err, stream) => {
      if (err) { res.status(422).send(err); }
      stream.pipe(fs.createWriteStream(`./tmp/${req.body.data.title}_${req.user._id}.pdf`));

      res.send(`${req.body.data.title}_${req.user._id}.pdf`);
    });
  };

  return {
    createPdf,
  };
};


module.exports = pdfController;
