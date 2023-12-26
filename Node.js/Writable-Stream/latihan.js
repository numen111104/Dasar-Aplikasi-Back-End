const fs = require('fs');

const writabkleStream = fs.createWriteStream('test.txt');

writabkleStream.write("lorem")