# karma-cucumber

> [Cucumber](https://github.com/cucumber/cucumber-js) run purely in the browser. A runner that can be used with a [karma reporter](#karma-reporter) or [html reporter](#html-reporter).

Write your step helpers entirely in [Javascript](https://github.com/jperl/karma-cucumber/blob/master/examples/uitest/features/step_definitions/myStepDefinitions.js), [access the DOM or instrument](https://github.com/jperl/karma-cucumber/blob/master/examples/uitest/features/step_definitions/myStepDefinitions.js#L20) your page easily with [uitest.js](https://github.com/tigbro/uitest.js), and [run](http://jperl.github.com/karma-cucumber/examples/uitest/CucumberFeatureRunner.html) your tests in the [browser](https://github.com/jperl/karma-cucumber/blob/master/examples/uitest/CucumberFeatureRunner.html) or (coming soon) with karma.

# Getting Started 

####Karma Reporter

> Run the cucumber tests in the browser with karma

Instructions coming soon

####HTML Reporter

> Run the cucumber tests in the browser manually

- Install the bower package `bower install karma-cucumber`
- Add your feature files, step definitions, and a runner.html
- Open the runner in the browser

Checkout [this folder of examples](https://github.com/jperl/karma-cucumber/tree/master/examples) which contains a [simple example](http://jperl.github.com/karma-cucumber/examples/simple/CucumberFeatureRunner.html) and a [uitest.js example](http://jperl.github.com/karma-cucumber/examples/uitest/CucumberFeatureRunner.html). 

You can run these locally as well:

- Make sure you have connect server `npm install`
- Then run it `node examples/server.js`

Here is an [example](https://github.com/jperl/angular-jquery-mobile/tree/master/test/features) in a larger application.

# Credits

Major credit to Julien and everyone making [cucumber-js](https://github.com/cucumber/cucumber-js).

# License

MIT