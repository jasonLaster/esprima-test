// Karma configuration
// Generated on Fri Jul 10 2015 09:13:33 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [ 'src/*.js', 'test/*.js', 'html/*.html', 'test/fixtures/*.json' ],

    exclude: [],



    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'html/*.html': ['html2js'],
      'test/fixtures/*.json': ['html2js']
    },

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
      }
    },



    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    port: 9876,
    colors: true,


    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    autoWatch: true,

    browsers: ['Chrome'],
    // ['PhantomJS'],

    singleRun: false,
  })
}
