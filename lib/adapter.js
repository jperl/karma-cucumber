(function(window) {

var karmaListener = function (karma) {
    var currentStep, currentScenario, currentFeature,
        scenarioSuccess = true, scenarioSkipped = false,
        scenarioLog = [];

    var hear = function (event, callback) {
        var eventName = event.getName();
        switch (eventName) {
            case 'BeforeFeature':
                currentFeature = event.getPayloadItem('feature');
                break;

            case 'BeforeScenario':
                currentScenario = event.getPayloadItem('scenario');
                currentScenario._time = new Date().getTime();
                break;

            case 'BeforeStep':
                currentStep = event.getPayloadItem('step');
                break;

            case 'StepResult':
                var stepResult = event.getPayloadItem('stepResult');
                scenarioSuccess = scenarioSuccess && stepResult.isSuccessful();
                scenarioSkipped = scenarioSkipped &&
                    (stepResult.isPending() || stepResult.isUndefined() || stepResult.isSkipped());

                if (stepResult.getFailureException) {
                    var error = stepResult.getFailureException();
                    var errorMessage = error.stack || error;
                    errorMessage = currentStep.getName() + "\n" + errorMessage;
                    scenarioLog.push(errorMessage);
                }
                break;
            case 'AfterScenario':
                var scenarioName = currentScenario.getName();
                var featureName = currentFeature.getName();
                var time = scenarioSkipped ? 0 : new Date().getTime() - currentScenario._time;

                var result = {
                    description: scenarioName,
                    log: scenarioLog,
                    suite: [featureName],
                    success: scenarioSuccess,
                    skipped: scenarioSkipped,
                    time: time
                };

                karma.result(result);
                break;
        }

        callback();
    };

    return {hear: hear};
};

/**
 * Very simple reporter for cucumber
 */
var KarmaReporter = function (karma) {
    //returns the listener to report on a feature
    this.getListener = function (feature) {
        return karmaListener(karma);
    };
};


var createStartFn = function (karma) {
    return function (config) {
        Cucumber.attachReporter(new KarmaReporter(karma));
        Cucumber.run(function () {
            karma.complete({});
        });
    };
};

var createDumpFn = function (tc, serialize) {
    return function () {

        var args = Array.prototype.slice.call(arguments, 0);

        if (serialize) {
            for (var i = 0; i < args.length; i++) {
                args[i] = serialize(args[i]);
            }
        }

        tc.info({dump: args});
    };
};

window.__karma__.start = createStartFn(window.__karma__);
window.dump = createDumpFn(window.__karma__, function(value) {
  return window.angular && window.angular.mock && window.angular.mock.dump(value) || value;
});

})(window);