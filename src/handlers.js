const fs = require('fs');
const path = require('path');

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {    // readFile asynchronous function
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/html' })
      response.end('<h1>Sorry, there was an error on our side...</h1>')
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
  const extention = url.split('.')[1];
  const extentionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css'
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type': 'text/html'});
      response.end('<h1>Sooo sorry... I can\'t find this file...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extentionTypes[extention] });
      response.end(file);
    }
  });
};

const handlerSearch = (request, response) => {
//   const url = request.url;
//   const filepath = path.join(__dirname, '..', 'public', 'index.html')
//
//   fs.readFile(filepath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, {'Content-Type': 'text/plain'});
//       response.end('404 - FILE NOT FOUND');
//       return;
//     }
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     response.end(file);
//   });
// }
//
// const handlerStatic = (request, response) => {
//   const url = request.url
//   const extension = url.split('.')[1];
//   const filepath = path.join(__dirname, '..', 'public', url);
//   const type = {
//     html: 'text/html',
//     js: 'application/javascript',
//     css: 'text/css'
//   }[extension]
//
//   fs.readFile(filepath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, {'Content-Type': 'text/plain'})
//       response.end('404 - FILE NOT FOUND');
//       return;
//     }
//     response.writeHead(200, {'Content-Type': type});
//     response.end(file);
//   });
// }

module.exports = {
  handleHome,
  handlePublic
};
