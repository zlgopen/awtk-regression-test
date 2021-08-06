let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image_value').click().sleep(200)
        .title().should.become("Image Value")

        .elementById('inc').click().sleep(100)
        .elementById('test').getAttribute('value').should.become(10)
        
        .elementById('dec').click().sleep(100)
        .elementById('test').getAttribute('value').should.become(0)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickAddDelta = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image_value').click().sleep(200)
        .title().should.become("Image Value")

        .elementById('click_add_delta').click().sleep(200)
        .elementById('click_add_delta').getAttribute('value').should.become(1)
        
        .elementById('click_add_delta').click().sleep(200)
        .elementById('click_add_delta').getAttribute('value').should.become(2)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

