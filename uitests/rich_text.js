let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('rich_text').click().sleep(200)
        .title().should.become("Rich Text")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
