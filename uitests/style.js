let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('style').click().sleep(200)
        .title().should.become("Style")
        .elementById('close').getAttribute('self_layout').should.become("default(x=c:0,y=b:10,w=25%,h=30)")
        .elementById('grid').getAttribute('children_layout').should.become("default(c=2,r=2,x=5,y=5,s=5)")
        .elementById('focusable').getAttribute('focusable').should.become(true)
        .elementById('feedback').getAttribute('focusable').should.become(true)
        .elementById('feedback').getAttribute('feedback').should.become(true)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testFeedback1 = function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 235, y: 455 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 235, y: 455 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('style').click().sleep(200)
        .title().should.become("Style")
        .elementById('status').text().should.become("status")
        .performTouchAction(pressButton).sleep(200)
        .performTouchAction(releaseButton).sleep(200)
        .elementById('status').text().should.become("feedback")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testFeedback2 = function (driver) {
    var pressButton = new wd.TouchAction(driver);
    pressButton.press({x: 50, y: 455 });
    
    var releaseButton = new wd.TouchAction(driver);
    releaseButton.release({x: 50, y: 455 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('style').click().sleep(200)
        .title().should.become("Style")
        .elementById('status').text().should.become("status")
        .performTouchAction(pressButton).sleep(200)
        .performTouchAction(releaseButton).sleep(200)
        .elementById('status').text().should.become("status")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
