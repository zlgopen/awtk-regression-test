let wd = require("wd");

exports.testSlideUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 150, y: 200});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 150, y: 180 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 150, y: 150 });

    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('bar1').getAttribute("value").should.become(0)
        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 150, y: 150});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 150, y: 180 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 150, y: 200 });

    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('bar1').getAttribute("value").should.become(0)
        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testBasic= function (driver) {
    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('bar1').getAttribute("visible").should.become(true)
        .elementById('bar2').getAttribute("visible").should.become(true)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testKeyUpDown= function (driver) {
    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('view1').click().sleep(200)
        .elementById('current_window').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(73)
        .elementById('current_window').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testKeyPageUpPageDown= function (driver) {
    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('view1').click().sleep(200)
        .elementById('current_window').sendKeys(wd.SPECIAL_KEYS.Pagedown).sleep(600)
        .elementById('bar1').getAttribute("value").should.become(221)
        .elementById('current_window').sendKeys(wd.SPECIAL_KEYS.Pageup).sleep(600)
        .elementById('bar1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testEnsureInView = function (driver) {
    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('slider1').click().sleep(200)
        .elementById('bar1').getAttribute("value").should.become(867)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickUpButton = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 312, y: 38});
    var release = new wd.TouchAction(driver);
    release.release({x: 312, y: 38});

    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('bar1').getAttribute("value").should.become(0)
        .performTouchAction(press).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(0)
        .elementById('current_window').sendKeys(wd.SPECIAL_KEYS.Pagedown).sleep(600)
        .elementById('bar1').getAttribute("value").should.become(221)
        .performTouchAction(press).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(148)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickDownButton = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 312, y: 207});
    var release = new wd.TouchAction(driver);
    release.release({x: 312, y: 207});

    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('bar1').getAttribute("value").should.become(0)
        .performTouchAction(press).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(73)
        .performTouchAction(press).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(146)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickDownUp = function (driver) {
    var press1 = new wd.TouchAction(driver);
    press1.press({x: 312, y: 180});
    var release1 = new wd.TouchAction(driver);
    release1.release({x: 312, y: 180});
    
    var press2 = new wd.TouchAction(driver);
    press2.press({x: 312, y: 50});
    var release2 = new wd.TouchAction(driver);
    release2.release({x: 312, y: 50});

    return driver.back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('list_view_desktop').click().sleep(200)
        .title().should.become("List View Desktop")
        .elementById('view1').click().sleep(200)
        .elementById('bar1').getAttribute("value").should.become(0)
        .performTouchAction(press1).sleep(20)
        .performTouchAction(release1).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(147)
        .performTouchAction(press1).sleep(20)
        .performTouchAction(release1).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(294)

        .performTouchAction(press2).sleep(20)
        .performTouchAction(release2).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(147)
        .performTouchAction(press2).sleep(20)
        .performTouchAction(release2).sleep(500)
        .elementById('bar1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
