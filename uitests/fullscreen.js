let wd = require("wd");

exports.testBasic= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('fullscreen').click().sleep(200)
        .title().should.become("Fullscreen")
        .getWindowSize().should.become({ width: 320, height: 450 })
        .elementById('.fullscreen').click().sleep(100)
        .elementById('status').text().should.become("fullscreen")
        .getWindowSize().should.become({ width: 320, height: 480 })
        .elementById('.unfullscreen').click().sleep(100)
        .elementById('status').text().should.become("unfullscreen")
        .getWindowSize().should.become({ width: 320, height: 450 })
        .back().sleep(200)
        .title().should.become("Regression Test")
}
