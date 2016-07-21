'use strict';
const Obs = require('./obs');
const http = require('http');
const fs = require('fs');
//
// set the url
const defaultOptions = {
  host: 'www.glerl.noaa.gov',
  path: '/metdata/chi/2016/20160710.04t.txt'
};
//
function Bouy () {
  //if (!options === undefined)
  //  this.options = options;
//  else
    this.options = defaultOptions;
  //
  //console.log('Options:', this.options);
}
// read data file
Bouy.get2MinDataFile = function(file, cb) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      cb(err);
    }
    cb(data);
  });
}
// parse into array
Bouy.get2MinData = function (str) {
  //console.log(str);
  const data = str.split('\n');
  const colNamesI = data.shift();
  const colNamesII = data.shift();
  const ws = /\s+/; // White space regexp
  let obsArray = [{}];

  for ( var line in data ) {
    const cols = data.shift().split(ws);
  //  cols.shift(); // remove junk
    const o = new Obs(cols);
    obsArray.push(o);
     //console.log(o);
  }
  return obsArray;
}

Bouy.prototype.httpGetCallback = (response) => {
  console.log('START CALLBACK');
  let str = '';
  //another chunk of data has been received, append it to str
  response.on('data', function(chunk) {
    str += chunk;
  });

  //Entire response has been received
  response.on('end',  () => {
      //let obsArray = get2MinData(str);
      console.log('END!');
  });

  console.log('END CALLBACK');
}
//
Bouy.prototype.GetWindData =  () => {
  // Get the data from Noaa site
    console.log(this.options);
   http.request(this.options, Bouy.httpGetCallback).end();
}
//
module.exports = Bouy;
