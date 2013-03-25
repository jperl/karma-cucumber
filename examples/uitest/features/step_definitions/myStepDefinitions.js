"use strict";

addStepDefinitions(function (step) {
    var uit = uitest.current;

    step.Given("developer opens the page", function (callback) {
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