
'use strict';

var fs = require('fs');
var path = require('path');

var XLSX = require('XLSX');

fs.readFile(path.resolve('./xlsx/sample.xlsx'), function(err, body) {
	if (err) {
		throw err;
	}

	var ws = XLSX.read(body);

	var data = Object.keys(ws.Sheets).map(function(sheet) {
		return {
			name: sheet,
			sheet: XLSX.utils.sheet_to_json(ws.Sheets[sheet], {header: 1, raw: true})
		};
	});

	console.log(data[0].sheet);
});
