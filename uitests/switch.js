let wd = require("wd");

exports.testClick= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('switch').click().sleep(200)
        .title().should.become("Switch")
        .elementById('s1').click().sleep(800)
        .elementById('status').text().should.become("s1")
        .elementById('old_value').text().should.become("s1:1")
        .elementById('value').text().should.become("s1:0")
        .elementById('s1').click().sleep(800)
        .elementById('status').text().should.become("s1")
        .elementById('old_value').text().should.become("s1:0")
        .elementById('value').text().should.become("s1:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSpace = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('switch').click().sleep(200)
        .title().should.become("Switch")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(800)
        .elementById('status').text().should.become("s2")
        .elementById('old_value').text().should.become("s2:1")
        .elementById('value').text().should.become("s2:0")
        .elementById('s2').click().sleep(200)
        .elementById('status').text().should.become("s2")
        .elementById('old_value').text().should.become("s2:0")
        .elementById('value').text().should.become("s2:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testReturn = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('switch').click().sleep(200)
        .title().should.become("Switch")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(800)
        .elementById('status').text().should.become("s3")
        .elementById('old_value').text().should.become("s3:1")
        .elementById('value').text().should.become("s3:0")
        .elementById('s3').click().sleep(600)
        .elementById('status').text().should.become("s3")
        .elementById('old_value').text().should.become("s3:0")
        .elementById('value').text().should.become("s3:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideLeft = function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 68, y: 168 });
    
    var moveButton = new wd.TouchAction(driver);
    moveButton.moveTo({x: 20, y: 168 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 20, y: 168 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('switch').click().sleep(200)
        .title().should.become("Switch")
        .performTouchAction(pressButton).sleep(20)
        .performTouchAction(moveButton).sleep(20)
        .performTouchAction(releaseButton).sleep(800)
        .elementById('old_value').text().should.become("s1:1")
        .elementById('value').text().should.become("s1:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}


