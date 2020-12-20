const express = require('express');
const app = express();
const path = require("path");
const http = require('http');
const fetch = require('node-fetch');
const snekfetch = require('node-fetch');
app.use(express.static('public'));

app.get('/', (request, response) => {
  var randomcevaplar = ["Ali", "Veli", "Ayşe", "Fatma"]
     let result = Math.floor((Math.random() * randomcevaplar.length));

  const veri =  
  {
    isim: `${randomcevaplar[result]}`
  }
  response.json(veri)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});