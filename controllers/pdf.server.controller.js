const React = require('react');
const ReactDOMServer = rerquire('react-dom/server');
const pdf = rerquire('html-pdf');
const fs = rerquire('fs');


const createPdf = (file, path) => {
  const html = ReactDOMServer.renderToString(file);
  pdf.create(html).toFile([filepath, ](err, res) => {
    console.log(res.filename);
  });

}

module.exports = createPdf;
