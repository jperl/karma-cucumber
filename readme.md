# Cucumber.js Runner

A simple test runner for [cucumber-js](https://github.com/cucumber/cucumber-js), similar to Jasmine's.

Don't write your step helpers in another language then fight with and wait for Selenium.

Write your helpers entirely in [Javascript](https://github.com/jperl/cucumber-js-runner/blob/master/examples/uitest/features/step_definitions/myStepDefinitions.js), [access the DOM or instrument](https://github.com/jperl/cucumber-js-runner/blob/master/examples/uitest/features/step_definitions/myStepDefinitions.js#L17) your page easily with [uitest.js](https://github.com/tigbro/uitest.js), and [run](http://jperl.github.com/cucumber-js-runner/examples/uitest/CucumberFeatureRunner.html) your tests in the [browser](https://github.com/jperl/cucumber-js-runner/blob/master/examples/uitest/CucumberFeatureRunner.html).

Coming Soon: Run your tests with [Karma](http://karma-runner.github.com/) and even build them into your grunt [workflow](https://github.com/karma-runner/grunt-karma).


# Getting Started

Checkout the [examples folder](https://github.com/jperl/cucumber-js-runner/tree/master/examples).

Run the [simple example](http://jperl.github.com/cucumber-js-runner/examples/simple/CucumberFeatureRunner.html) or [uitest.js example](http://jperl.github.com/cucumber-js-runner/examples/uitest/CucumberFeatureRunner.html).

You can run these locally as well. Serve them with `node examples/server.js`

# Credits

Major credit to Julien and everyone making [cucumber-js](https://github.com/cucumber/cucumber-js).

# License

MIT