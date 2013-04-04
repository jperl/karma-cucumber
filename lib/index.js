var createPattern = function (path) {
    return {pattern: path, included: true, served: true, watched: false};
};

var initCucumber = function (files) {
    files.unshift(createPattern(__dirname + '/../components/async/lib/async.js'));
    files.unshift(createPattern(__dirname + '/../components/jquery/jquery.js'));
    files.unshift(createPattern(__dirname + '/cucumber-js-runner.js'));
    files.unshift(createPattern(__dirname + '/adapter.js'));
    files.unshift(createPattern(__dirname + '/../vendor/cucumber.js'));
};

initCucumber.$inject = ['config.files'];

module.exports = {
    'framework:cucumber': ['factory', initCucumber]
};