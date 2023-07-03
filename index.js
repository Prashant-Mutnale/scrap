const puppeteer = require("puppeteer"); // ^19.0.0
const http = require('http');
// const url = "https://api.demo.dhiway.com/record/preview/73cc2449-44fb-4d30-a6a3-0ea5c3accccd?thumbnail=1";

// let browser;
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url, {waitUntil: 'networkidle2'});
//     const pdfFile = await page.pdf({path: '/Users/prashantmutnale/Downloads/tenmark.pdf', format: 'A4'});
  
//     await browser.close();

//     return pdfFile
// })()
//   .catch(err => console.error(err))
//   .finally(() => browser.close());



const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});