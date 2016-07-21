function Obs (line) {
  this.Id = parseFloat(line[0]);
  this.Year = parseFloat(line[1]);
  this.DOY = parseFloat(line[2]);
  this.UTC = parseFloat(line[3]);
  this.AirTemp = parseFloat(line[4]);
  this.WindSpd = parseFloat(line[5]);
  this.WindGst = parseFloat(line[6]);
  this.WindDir = parseFloat(line[7]);
  this.RelHum = parseFloat(line[8]);
}

module.exports = Obs;
