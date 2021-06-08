
let wd = require("wd");

exports.testLeftKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_menu').click().sleep(200)
        .title().should.become("Slide Menu")
        .elementById('slide_menu1').click().sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(2)

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(1)
        .elementById('changed').text().should.become("changed:2:1")
        .elementById('will_change').text().should.become("will:2:1")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed:1:0")
        .elementById('will_change').text().should.become("will:1:0")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:0:4")
        .elementById('will_change').text().should.become("will:0:4")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_menu').click().sleep(200)
        .title().should.become("Slide Menu")
        .elementById('slide_menu1').click().sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(2)

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(3)
        .elementById('changed').text().should.become("changed:2:3")
        .elementById('will_change').text().should.become("will:2:3")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(4)
        .elementById('changed').text().should.become("changed:3:4")
        .elementById('will_change').text().should.become("will:3:4")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(0)
        .elementById('changed').text().should.become("changed:4:0")
        .elementById('will_change').text().should.become("will:4:0")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideLeft = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 10, y: 200});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 300, y: 200});
    
    var release = new wd.TouchAction(driver);
    release.release({x: 300, y: 200});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_menu').click().sleep(200)
        .title().should.become("Slide Menu")
        .elementById('slide_menu1').click().sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(2)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(1000)
        .performTouchAction(release).sleep(500)
        .elementById('slide_menu1').getAttribute("value").should.become(4)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSlideRight = function (driver) {
    var press = new wd.TouchAction(driver);
    press.press({x: 300, y: 200});
    
    var move = new wd.TouchAction(driver);
    move.moveTo({x: 10, y: 200});
    
    var release = new wd.TouchAction(driver);
    release.release({x: 10, y: 200});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('slide_menu').click().sleep(200)
        .title().should.become("Slide Menu")
        .elementById('slide_menu1').getAttribute("value").should.become(2)

        .performTouchAction(press).sleep(20)
        .performTouchAction(move).sleep(1000)
        .performTouchAction(release).sleep(600)
        .elementById('slide_menu1').getAttribute("value").should.become(0)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
