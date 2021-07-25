
let wd = require("wd");

exports.testLeftKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Down arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed")
        .elementById('will_change').text().should.become("will_change")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(1)
        .elementById('changed').text().should.become("changed:0:1")
        .elementById('will_change').text().should.become("will:0:1")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(2)
        .elementById('changed').text().should.become("changed:1:2")
        .elementById('will_change').text().should.become("will:1:2")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(3)
        .elementById('changed').text().should.become("changed:2:3")
        .elementById('will_change').text().should.become("will:2:3")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:3:4")
        .elementById('will_change').text().should.become("will:3:4")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:4:5")
        .elementById('will_change').text().should.become("will:4:5")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:4:5")
        .elementById('will_change').text().should.become("will:4:5")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:5:4")
        .elementById('will_change').text().should.become("will:5:4")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideLeft = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 10, y: 128});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 300, y: 128 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 300, y: 128 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideRight = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 300, y: 128});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 10, y: 128 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 10, y: 128 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(1)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
/////////////loop/////////////


exports.testLeftKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:0:5")
        .elementById('will_change').text().should.become("will:0:5")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightKeyLoop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .elementById('changed').text().should.become("changed:0:5")
        .elementById('will_change').text().should.become("will:0:5")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed:5:0")
        .elementById('will_change').text().should.become("will:5:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideLeftLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 10, y: 350});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 300, y: 350 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 300, y: 350 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view2').click().sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(500)
        .elementById('slide_view2').getAttribute("value").should.become(5)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideRightLoop = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 300, y: 350});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 10, y: 350 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 10, y: 350 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view2').getAttribute("value").should.become(0)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('slide_view2').getAttribute("value").should.become(1)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftRightKeyHSlider = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').click().sleep(600)
        .elementById('slide_view1').getAttribute("value").should.become(0)
        .elementById('slider1').click().sleep(600)
        .elementById('slider1').getAttribute("value").should.become(10)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slider1').getAttribute("value").should.become(9)
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slider1').getAttribute("value").should.become(10)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideRightHSlider = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 60, y: 48});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 80, y: 48 });
    
    var release = new wd.TouchAction(driver);
    release.release({x: 80, y: 48 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_view_h').click().sleep(200)
        .title().should.become("Slide View H")
        .elementById('slide_view1').getAttribute("value").should.become(0)

        .elementById('slider1').click().sleep(600)
        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(20)
        .performTouchAction(release).sleep(600)
        .elementById('slider1').getAttribute("value").should.become(19)

        .elementById('slide_view1').getAttribute("value").should.become(0)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
