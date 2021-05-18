let wd = require("wd");

exports.testClick= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")
        .elementById('normal_button').click().sleep(200)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testActivateByKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")

        .elementById('normal_button').sendKeys(wd.SPECIAL_KEYS.Space)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        
        .elementById('normal_button').sendKeys(wd.SPECIAL_KEYS.Return)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testTap = function (driver) {
    var tapButton = new wd.TouchAction(driver);
    tapButton.tap({x: 166, y: 250 });
    
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")
        .performTouchAction(tapButton).sleep(200)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")

}

exports.testPressRelease= function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 166, y: 250 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 166, y: 250 });
    
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")
        .performTouchAction(pressButton).sleep(200)
        .performTouchAction(releaseButton).sleep(200)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")

}

exports.testLongPressOnNormalButton= function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 166, y: 256 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 166, y: 256 });
    
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")
        .performTouchAction(pressButton).sleep(200)
        .sleep(2000)
        .performTouchAction(releaseButton).sleep(200)
        .elementById('status').text().should.become("click")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")

}

exports.testLongPress= function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 166, y: 316 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 166, y: 316 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('button').click().sleep(200)
        .title().should.become("Button")
        .performTouchAction(pressButton).sleep(200)
        .sleep(2000)
        .performTouchAction(releaseButton).sleep(200)
        .elementById('status').text().should.become("long_press")
        .elementById('status').setText("status")
        .elementById('status').text().should.become("status")
        .back().sleep(200)
        .title().should.become("Regression Test")

}
