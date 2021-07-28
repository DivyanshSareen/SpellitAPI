const fs = require('fs');

const raw_data = fs.readFileSync('word3000.csv', 'utf8').toLowerCase();
const data = raw_data.split("\r").map(e => e.trim());

module.exports.data = data;
