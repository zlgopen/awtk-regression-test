let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('svg').click().sleep(200)
        .title().should.become("SVG")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
