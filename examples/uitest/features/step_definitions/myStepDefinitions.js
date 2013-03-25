"use strict";

addStepDefinitions(function (step) {
    var uit = uitest.current;

    step.Given("developer opens the page", function (callback) {
        //relative to uitest
        uit.url("../index.html");

        uit.ready(function () {
            callback();
        });
    });

    step.When("developer chooses learn more", function (callback) {
        callback();
    });

    step.Then("the alert should say $alertText", function (alertText, callback) {
        console.log(alertText);

        callback();
    });
});