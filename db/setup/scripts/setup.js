'use strict';

var bucket = require('../lib/couchPublic.js');

bucket.ensureCreated(function () {
    console.log("Bucket was created successfully !");
});
