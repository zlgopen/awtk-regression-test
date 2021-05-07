let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('check_button').click().sleep(200)
        .title().should.become("Check Button")

        .elementById('book').getAttribute("value").should.become(false)
        .elementById('book').click().sleep(100)
        .elementById('value').text().should.become("book:true")
        .elementById('old_value').text().should.become("book:false")
        .elementById('book').getAttribute("value").should.become(true)
        .elementById('food').getAttribute("value").should.become(false)
        .elementById('pencil').getAttribute("value").should.become(false)

        .elementById('food').click().sleep(100)
        .elementById('value').text().should.become("food:true")
        .elementById('old_value').text().should.become("food:false")
        .elementById('food').getAttribute("value").should.become(true)
        .elementById('book').getAttribute("value").should.become(true)
        .elementById('pencil').getAttribute("value").should.become(false)
        
        .elementById('pencil').click().sleep(100)
        .elementById('value').text().should.become("pencil:true")
        .elementById('old_value').text().should.become("pencil:false")
        .elementById('pencil').getAttribute("value").should.become(true)
        .elementById('book').getAttribute("value").should.become(true)
        .elementById('food').getAttribute("value").should.become(true)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRadioBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('check_button').click().sleep(200)
        .title().should.become("Check Button")

        .elementById('left').getAttribute("value").should.become(false)
        .elementById('left').click().sleep(100)
        .elementById('left').getAttribute("value").should.become(true)
        .elementById('middle').getAttribute("value").should.become(false)
        .elementById('right').getAttribute("value").should.become(false)

        .elementById('middle').click().sleep(100)
        .elementById('middle').getAttribute("value").should.become(true)
        .elementById('left').getAttribute("value").should.become(false)
        .elementById('right').getAttribute("value").should.become(false)
        
        .elementById('right').click().sleep(100)
        .elementById('right').getAttribute("value").should.become(true)
        .elementById('left').getAttribute("value").should.become(false)
        .elementById('middle').getAttribute("value").should.become(false)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDisableChange = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('check_button').click().sleep(200)
        .title().should.become("Check Button")

        .elementById('disable_change').getAttribute("value").should.become(false)
        .elementById('disable_change').click().sleep(100)
        .elementById('disable_change').getAttribute("value").should.become(false)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
