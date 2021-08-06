let wd = require("wd");

exports.testBasic = function (driver) {
    var tap = new wd.TouchAction(driver);
    tap.tap({x: 100, y: 99});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('overlay').click().sleep(200)
        .title().should.become("Overlay")

        .performTouchAction(tap).sleep(500)
        .title().should.become("Overlay")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickThrough= function (driver) {
    var tap = new wd.TouchAction(driver);
    tap.tap({x: 100, y: 99});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('overlay').click().sleep(200)
        .title().should.become("Overlay")
        .elementById('click_through').click().sleep(500)

        .performTouchAction(tap).sleep(500)

        .back().sleep(200)
        .title().should.become("Overlay")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testAlwaysOnTop = function (driver) {
    var tap = new wd.TouchAction(driver);
    tap.tap({x: 100, y: 99});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('overlay').click().sleep(200)
        .title().should.become("Overlay")
        .elementById('click_through').click().sleep(500)
        .elementById('always_on_top').click().sleep(500)

        .performTouchAction(tap).sleep(500)
        .title().should.become("Overlay")

        .back().sleep(200)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
