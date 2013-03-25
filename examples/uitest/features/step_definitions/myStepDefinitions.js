"use strict";

addStepDefinitions(function (step) {
    var uit;

    step.Given("developer opens the page", function (callback) {
        //create a new test every time
        uit = uitest.create();

        //relative to uitest
        uit.url("../app.html");

        uit.ready(function () {
            callback();
        });
    });

    step.When("developer chooses learn more", function (callback) {
        uit.ready(function (document) {
            $(document).find("#learnMore").click();
            callback();
        });
    });

    step.Then("the application should say $message", function (message, callback) {
        uit.ready(function (document) {
            var messageText = $(document).find("#message").text()

            if (message === messageText)
                callback();
            else
                callback.fail();
        });
    });
});