const PORT= 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


//calling express
const app = express();
app.listen(PORT, ()=> console.log('server running on port '+ PORT));