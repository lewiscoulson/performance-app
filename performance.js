var psi = require('psi');
var fs = require('fs');

// get the PageSpeed Insights report
psi(process.argv[2], function (err, data) {
  var data_string = JSON.stringify(data);

  fs.writeFile('data.json', data_string, function (err) {
    if (err) return console.log(err);
  });
});
