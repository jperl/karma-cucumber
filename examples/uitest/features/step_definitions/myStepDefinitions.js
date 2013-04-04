"use strict";

addStepDefinitions(function (step) {
    var uit,
    //relative to uitest.js
        baseUrl = "../../../";

    step.defineStep("developer opens the page", function (callback) {
        //create a new test every time
        uit = uitest.create();

        //relative to uitest
        uit.url(baseUrl + "examples/uitest/app.html");

        uit.ready(function () {
            callback();
        });
    });

    step.defineStep("developer chooses learn more", function (callback) {
        uit.ready(function (document) {
            $(document).find("#learnMore").click();
            callback();
        });
    });

    step.defineStep("the application should say $message", function (message, callback) {
        uit.ready(function (document) {
            var messageText = $(document).find("#message").text()

            if (message === messageText)
                callback();
            else
                callback.fail();
        });
    });
});