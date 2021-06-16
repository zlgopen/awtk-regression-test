
let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('pages_clip').click().sleep(1000)
        .title().should.become("Pages Clip")
        .elementById('status').text().should.become("20,20,280,300")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
