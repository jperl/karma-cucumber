"use strict";

addStepDefinitions(function (step) {
    // Provide a custom World constructor. It's optional, a default one is supplied.
    step.World = function (callback) {
        callback();
    };

    // Define your World!
    step.World.prototype.variable = 0;

    step.World.prototype.setTo = function (number) {
        this.variable = parseInt(number);
    };

    step.World.prototype.incrementBy = function (number) {
        this.variable += parseInt(number);
    };


    step.Given(/^a variable set to (\d+)$/, function (number, callback) {
        this.setTo(number);
        callback();
    });

    step.When(/^I increment the variable by (\d+)$/, function (number, callback) {
        this.incrementBy(number);
        callback();
    });

    step.Then(/^the variable should contain (\d+)$/, function (number, callback) {
        if (this.variable != parseInt(number))
            callback.fail(new Error('Variable should contain ' + number +
                ' but it contains ' + this.variable + '.'));
        else
            callback();
    });
});