import express from 'express';
const app = express();
import fs from 'fs';

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', (request, response) => {
  var content = new Date().getTime().toLocaleString();

  var dateTime = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;

  fs.writeFile(`./${dateTime}.txt`, content, (err) => {
    if (err) console.log(err);
    else console.log('success');
  });
  response.send('files created');
});

app.get('/files', (request, response) => {
  fs.readdir('./', (err, Files) => {
    if (err) console.log(err);
    else response.json({ Files });
  });
});

app.listen(port, () => {
  console.log(`The Server Started at the port :  ${port}`);
});
