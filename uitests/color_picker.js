let wd = require("wd");

exports.testClickSV= function (driver) {
    var tap = new wd.TouchAction(driver);
    tap.tap({x: 100, y: 99});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('color_picker').click().sleep(200)
        .title().should.become("Color Picker")

        .performTouchAction(tap).sleep(500)
        .elementById('status').text().should.become("FF00A5FF=>FF2C6180")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickH = function (driver) {
    var tap = new wd.TouchAction(driver);
    tap.tap({x: 218, y: 100});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('color_picker').click().sleep(200)
        .title().should.become("Color Picker")

        .performTouchAction(tap).sleep(500)
        .elementById('status').text().should.become("FF00A5FF=>FFFF1900")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}
