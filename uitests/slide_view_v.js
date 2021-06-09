
let wd = require("wd");

exports.testUpKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(1)
        .elementById('changed').text().should.become("changed:0:1")
        .elementById('will_change').text().should.become("will:0:1")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(2)
        .elementById('changed').text().should.become("changed:1:2")
        .elementById('will_change').text().should.become("will:1:2")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(3)
        .elementById('changed').text().should.become("changed:2:3")
        .elementById('will_change').text().should.become("will:2:3")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:3:4")
        .elementById('will_change').text().should.become("will:3:4")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:4:5")
        .elementById('will_change').text().should.become("will:4:5")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:4:5")
        .elementById('will_change').text().should.become("will:4:5")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:5:4")
        .elementById('will_change').text().should.become("will:5:4")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideUp = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 100, y: 10});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 100, y: 200 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 200 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideDown = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 100, y: 200});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 100, y: 10 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 10 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(1)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
/////////////loop/////////////


exports.testUpKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:0:5")
        .elementById('will_change').text().should.become("will:0:5")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:0:5")
        .elementById('will_change').text().should.become("will:0:5")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed:5:0")
        .elementById('will_change').text().should.become("will:5:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideUpLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 100, y: 280});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 100, y: 450 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 450 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideDownLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 100, y: 440});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 100, y: 260 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 100, y: 260 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view2').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(1)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpDownKeyVSlider = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('sliderv').click().sleep(600)
        .elementById('sliderv').getAttribute("value").should.become(20)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('sliderv').getAttribute("value").should.become(21)
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('sliderv').getAttribute("value").should.become(20)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideUpVSlider = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 158, y: 209});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 158, y: 180 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 158, y: 180 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_v').click().sleep(200)
        .title().should.become("Slide View V")
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .elementById('sliderv').click().sleep(600)
        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('sliderv').getAttribute("value").should.become(46)

        .elementById('slide_view1').getAttribute("value").should.become(0)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
