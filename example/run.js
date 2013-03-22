addFeatures(["features/user_adds_todo.feature", "features/user_completes_todo.feature", "features/user_saves_todo.feature"]);

Cucumber.attachReporter(new Cucumber.HtmlReporter());
Cucumber.run();