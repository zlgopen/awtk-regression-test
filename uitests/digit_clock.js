let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('digit_clock').click().sleep(200)
        .title().should.become("Digit Clock")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
