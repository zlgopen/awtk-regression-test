let wd = require("wd");
exports.testMoveFirst = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus').click().sleep(200)
        .title().should.become("Focus")
        .elementById('first').click().sleep(200)
        .elementById('status').text().should.become("dialog")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testTab = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus').click().sleep(200)
        .title().should.become("Focus")
        .elementById('tab').click().sleep(200)
        .elementById('status').text().should.become("tab")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('status').text().should.become("prev_next")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('status').text().should.become("first")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('status').text().should.become("left_right_up_down")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('status').text().should.become("slider")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Tab"]).sleep(200)
        .elementById('status').text().should.become("book")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testPrevNext= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus').click().sleep(200)
        .title().should.become("Focus")
        .elementById('prev_next').click().sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('status').text().should.become("tab")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('status').text().should.become("dialog")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('status').text().should.become("close")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('status').text().should.become("mute")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('status').text().should.become("close")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('status').text().should.become("dialog")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('status').text().should.become("tab")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftRightUpDown= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus').click().sleep(200)
        .title().should.become("Focus")
        .elementById('left_right_up_down').click().sleep(200)
        .elementById('status').text().should.become("left_right_up_down")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('status').text().should.become("prev_next")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Left arrow"]).sleep(200)
        .elementById('status').text().should.become("tab")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Left arrow"]).sleep(200)
        .elementById('status').text().should.become("dialog")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('status').text().should.become("first")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Right arrow"]).sleep(200)
        .elementById('status').text().should.become("left_right_up_down")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testListViewBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus_list_view').click().sleep(200)
        .title().should.become("List View Focus")
        .elementById('view').getAttribute('yoffset').should.become(170)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testListViewFirst = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus_list_view').click().sleep(200)
        .title().should.become("List View Focus")
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('first').click().sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(0)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testListViewLast = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus_list_view').click().sleep(200)
        .title().should.become("List View Focus")
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('last').click().sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(350)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testListViewDown= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus_list_view').click().sleep(200)
        .title().should.become("List View Focus")
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(230)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(290)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(350)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testListViewUp= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('focus_list_view').click().sleep(200)
        .title().should.become("List View Focus")
        .elementById('view').getAttribute('yoffset').should.become(170)

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(170)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('view').getAttribute('yoffset').should.become(120)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
