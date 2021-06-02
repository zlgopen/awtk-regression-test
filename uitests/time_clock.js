let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('time_clock').click().sleep(200)
        .title().should.become("Time Clock")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
