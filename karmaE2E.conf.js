// Karma configuration

basePath = ".";

frameworks = ['cucumber'];

files = [
    //libraries
    "components/uitest.js/dist/uitest.js",

    //Test-Specs
    "examples/uitest/features/run.js",
    "examples/uitest/features/step_definitions/myStepDefinitions.js",
    {pattern: 'examples/**/*.feature', watched: false, included: false},

    //serve the application
    {pattern: 'examples/**', watched: false, included: false}
];

exclude = [];

logLevel = LOG_INFO;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ["Chrome"];

plugins = [
    "karma-cucumber"
];