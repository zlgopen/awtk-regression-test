let wd = require("wd");

exports.testLeftKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('h1').getAttribute("value").should.become(9)
        .elementById('changed').text().should.become("h1:10:9")
        .elementById('will_change').text().should.become("h1:10:9")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(200)
        .elementById('h1').getAttribute("value").should.become(11)
        .elementById('changed').text().should.become("h1:10:11")
        .elementById('will_change').text().should.become("h1:10:11")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickLeft = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 30, y: 50 });
    var release = new wd.TouchAction(driver);
    release.release({x: 30, y: 50 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('h1').getAttribute("value").should.become(1)
        .elementById('changed').text().should.become("h1:10:1")
        .elementById('will_change').text().should.become("h1:10:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickRight = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 100, y: 50 });
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 50 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('h1').getAttribute("value").should.become(27)
        .elementById('changed').text().should.become("h1:10:27")
        .elementById('will_change').text().should.become("h1:10:27")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDragRight = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 50, y: 50 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 100, y: 50});
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 50 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .performTouchAction(press).sleep(200)
        .performTouchAction(move).sleep(200)
        .performTouchAction(release).sleep(200)
        .elementById('h1').getAttribute("value").should.become(27)
        .elementById('changed').text().should.become("h1:10:27")
        .elementById('changing').text().should.become("h1:9:27")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDragLeft = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 50, y: 50 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 30, y: 50});
    var release = new wd.TouchAction(driver);
    release.release({x: 30, y: 50 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('h1').click().sleep(600)
        .elementById('h1').getAttribute("value").should.become(10)
        .performTouchAction(press).sleep(200)
        .performTouchAction(move).sleep(200)
        .performTouchAction(release).sleep(200)
        .elementById('h1').getAttribute("value").should.become(1)
        .elementById('changed').text().should.become("h1:10:1")
        .elementById('changing').text().should.become("h1:9:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVDownKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(200)
        .elementById('v1').getAttribute("value").should.become(199)
        .elementById('changed').text().should.become("v1:200:199")
        .elementById('will_change').text().should.become("v1:200:199")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVUpKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(200)
        .elementById('v1').getAttribute("value").should.become(201)
        .elementById('changed').text().should.become("v1:200:201")
        .elementById('will_change').text().should.become("v1:200:201")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVClickDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 120, y: 350 });
    var release = new wd.TouchAction(driver);
    release.release({x: 120, y: 350 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('v1').getAttribute("value").should.become(77)
        .elementById('changed').text().should.become("v1:200:77")
        .elementById('will_change').text().should.become("v1:200:77")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVClickUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 120, y: 250 });
    var release = new wd.TouchAction(driver);
    release.release({x: 120, y: 250 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('v1').getAttribute("value").should.become(480)
        .elementById('changed').text().should.become("v1:200:480")
        .elementById('will_change').text().should.become("v1:200:480")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVDragUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 120, y: 320 });
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 120, y: 250 });
    var release = new wd.TouchAction(driver);
    release.release({x: 120, y: 250 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .performTouchAction(press).sleep(200)
        .performTouchAction(move).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('v1').getAttribute("value").should.become(480)
        .elementById('changed').text().should.become("v1:200:480")
        .elementById('changing').text().should.become("v1:198:480")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testVDragDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 120, y: 320 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 120, y: 400});
    var release = new wd.TouchAction(driver);
    release.release({x: 120, y: 400 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slider').click().sleep(200)
        .title().should.become("Slider")
        .elementById('v1').click().sleep(600)
        .elementById('v1').getAttribute("value").should.become(200)
        .performTouchAction(press).sleep(200)
        .performTouchAction(move).sleep(200)
        .performTouchAction(release).sleep(200)
        .elementById('v1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("v1:200:0")
        .elementById('changing').text().should.become("v1:198:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
