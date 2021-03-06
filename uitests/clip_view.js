
let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('clip_view').click().sleep(1000)
        .title().should.become("Clip View")
        .elementById('status').text().should.become("10,20,200,300")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
