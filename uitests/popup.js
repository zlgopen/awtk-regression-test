let wd = require("wd");

exports.testCloseByTimer= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('enable_close_by_timer').click().sleep(1200)
        .title().should.become("Regression Test")
}

exports.testCloseByTimerWithUserAction= function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 60 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 60 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('enable_close_by_timer').click().sleep(300)
        .performTouchAction(press).sleep(300)
        .performTouchAction(release).sleep(300)
        .title().should.become("Popup1")
        .sleep(1200)
        .title().should.become("Regression Test")
}

exports.testCloseByClick = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 60 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 60 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('enable_close_by_click').click().sleep(100)
        .performTouchAction(press)
        .performTouchAction(release).sleep(600)
        .title().should.become("Regression Test")
}

exports.testCloseByClickOutside1 = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 6, y: 6 });
    var release = new wd.TouchAction(driver);
    release.release({x: 6, y: 6 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('enable_close_by_click_outside').click().sleep(100)
        .performTouchAction(press)
        .performTouchAction(release).sleep(600)
        .title().should.become("Regression Test")
}

exports.testCloseByClickOutside2 = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 60 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 60 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('enable_close_by_click_outside').click().sleep(100)
        .performTouchAction(press)
        .performTouchAction(release).sleep(200)
        .title().should.become("Popup1")
        .back().sleep(600)
        .title().should.become("Regression Test")
}

exports.testPopupOverPopup1 = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('open_popup2').click().sleep(100)
        .title().should.become("Popup2")
        .elementById('popup1.status2').text().should.become("background")
        .back().sleep(600)
        .elementById('status3').text().should.become("foreground")
        .elementById('status1').text().should.become("close")
        .back().sleep(600)
        .title().should.become("Regression Test")
}

exports.testPopupOverPopup2 = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('popup').click().sleep(600)
        .title().should.become("Popup1")
        .elementById('status1').text().should.become("will_open")
        .elementById('status2').text().should.become("open")
        .elementById('open_popup3').click().sleep(700)
        .title().should.become("Popup2")
        .elementById('popup1.status2').text().should.become("background")
        .back().sleep(600)
        .elementById('status3').text().should.become("foreground")
        .elementById('status1').text().should.become("close")
        .back().sleep(600)
        .title().should.become("Regression Test")
}
