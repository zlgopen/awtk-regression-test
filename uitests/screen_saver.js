let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('screen_saver').click().sleep(200)
        .title().should.become("Screen Saver")
        .elementById('enable').click().sleep(1200)
        .title().should.become("Gif Image")
        .back().sleep(200)
        .elementById('status').text().should.become("screen_saver")
        .title().should.become("Screen Saver")
        .elementById('disable').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testPointer = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 60 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 60 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('screen_saver').click().sleep(200)
        .title().should.become("Screen Saver")
        .elementById('enable').click().sleep(500)
        .performTouchAction(press)
        .performTouchAction(release).sleep(500)
        .performTouchAction(press)
        .performTouchAction(release).sleep(500)
        .elementById('status').text().should.become("status")
        .sleep(1200)
        .title().should.become("Gif Image")
        .back().sleep(200)
        .elementById('status').text().should.become("screen_saver")
        .title().should.become("Screen Saver")
        .elementById('disable').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testKey = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 60 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 60 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('screen_saver').click().sleep(200)
        .title().should.become("Screen Saver")
        .elementById('enable').click().sleep(500)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(600)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(600)
        .elementById('status').text().should.become("status")
        .sleep(1200)
        .title().should.become("Gif Image")
        .back().sleep(200)
        .elementById('status').text().should.become("screen_saver")
        .title().should.become("Screen Saver")
        .elementById('disable').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

