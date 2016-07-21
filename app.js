'use strict';
const fs = require('fs');
var Obs = require('./obs.js');
// Bouy data
var Bouy = require('./Bouy.js');

var files = ['./20160713.01t.txt','./20160713.04t.txt'];

files.map( (file) => {
      return Bouy.get2MinDataFile(file, (data) => {
      //  console.log(data);
        var jsonData = Bouy.get2MinData(data);
        console.log(jsonData);
      });
});
