var config = require('./config');

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        //'cancellationPolicies/cancellation*.js', //testing cancellationPolicies
        //'rooms/room*.js',//testing rooms
        'supplements/suppl*.js'//testing supplements

    ],

    seleniumAddress: 'http://localhost:9000',

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs'
    },

    chromeOnly: false,
    onPrepare: function () {
        browser.driver.manage().window().setSize(1600, 800);
    },

    baseUrl: config.frontend.address,
    framework: 'jasmine',


    allScriptsTimeout: 40000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000
    }
};