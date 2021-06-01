let wd = require("wd");

exports.testUpKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('d5').text().should.become("2008")
        .elementById('changed').text().should.become("d5:9:8")
        .elementById('will_change').text().should.become("d5:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 60, y: 100 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 100 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('d5').text().should.become("2008")
        .elementById('changed').text().should.become("d5:9:8")
        .elementById('will_change').text().should.become("d5:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 140 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 60, y: 120});
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 120 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .performTouchAction(press).sleep(100)
        .performTouchAction(move).sleep(500)
        .performTouchAction(release).sleep(600)
        .elementById('d5').text().should.become("2010")
        .elementById('changed').text().should.become("d5:9:10")
        .elementById('will_change').text().should.become("d5:9:10")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 120 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 60, y: 140});
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 140 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .performTouchAction(press).sleep(100)
        .performTouchAction(move).sleep(500)
        .performTouchAction(release).sleep(600)
        .elementById('d5').text().should.become("2008")
        .elementById('changed').text().should.become("d5:9:8")
        .elementById('will_change').text().should.become("d5:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('d5').text().should.become("2010")
        .elementById('changed').text().should.become("d5:9:10")
        .elementById('will_change').text().should.become("d5:9:10")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 60, y: 160 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 160 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d5').click().sleep(600)
        .elementById('d5').text().should.become("2009")
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('d5').text().should.become("2010")
        .elementById('changed').text().should.become("d5:9:10")
        .elementById('will_change').text().should.become("d5:9:10")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('d3').text().should.become("2008")
        .elementById('changed').text().should.become("d3:9:8")
        .elementById('will_change').text().should.become("d3:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickUpLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 60, y: 230 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 230 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2008")
        .elementById('changed').text().should.become("d3:9:8")
        .elementById('will_change').text().should.become("d3:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideUpLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 270 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 60, y: 250});
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 250 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")

        .performTouchAction(press).sleep(100)
        .performTouchAction(move).sleep(500)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2010")
        .elementById('changed').text().should.become("d3:9:10")
        .elementById('will_change').text().should.become("d3:9:10")
        
        .performTouchAction(press).sleep(100)
        .performTouchAction(move).sleep(500)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2000")
        .elementById('changed').text().should.become("d3:10:0")
        .elementById('will_change').text().should.become("d3:10:0")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideDownLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 250 });
    var move= new wd.TouchAction(driver);
    move.moveTo({x: 60, y: 270});
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 270 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")
        .performTouchAction(press).sleep(100)
        .performTouchAction(move).sleep(500)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2008")
        .elementById('changed').text().should.become("d3:9:8")
        .elementById('will_change').text().should.become("d3:9:8")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('d3').text().should.become("2010")
        .elementById('changed').text().should.become("d3:9:10")
        .elementById('will_change').text().should.become("d3:9:10")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('d3').text().should.become("2000")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('d3').text().should.become("2010")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickDownLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press .press({x: 60, y: 290 });
    var release = new wd.TouchAction(driver);
    release.release({x: 60, y: 290 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('text_selector').click().sleep(200)
        .title().should.become("Text Selector")
        .elementById('d3').click().sleep(600)
        .elementById('d3').text().should.become("2009")

        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2010")
        .elementById('changed').text().should.become("d3:9:10")
        .elementById('will_change').text().should.become("d3:9:10")
        
        .performTouchAction(press).sleep(200)
        .performTouchAction(release).sleep(600)
        .elementById('d3').text().should.become("2000")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
