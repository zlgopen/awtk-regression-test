let wd = require("wd");

exports.testDownLeft = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_down_left').click().sleep(800)
        .title().should.become("menu_down_left")
        .getWindowPosition().should.become({ x: 5, y: 119 })
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownCenter = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_down_center').click().sleep(800)
        .title().should.become("menu_down_center")
        .getWindowPosition().should.become({ x: 96, y: 119 })
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDownRight = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_down_right').click().sleep(800)
        .title().should.become("menu_down_right")
        .getWindowPosition().should.become({ x: 187, y: 119 })
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpLeft = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_up_left').click().sleep(800)
        .title().should.become("menu_up_left")
        .getWindowPosition().should.become({ x: 5, y: 301})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpCenter = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_up_center').click().sleep(800)
        .title().should.become("menu_up_center")
        .getWindowPosition().should.become({ x: 96, y: 301})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUpRight = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_up_right').click().sleep(800)
        .title().should.become("menu_up_right")
        .getWindowPosition().should.become({ x: 187, y: 301})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
/////////

exports.testLeftTop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_left_top').click().sleep(800)
        .title().should.become("menu_left_top")
        .getWindowPosition().should.become({ x: 87, y: 124})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftMiddle = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_left_middle').click().sleep(800)
        .title().should.become("menu_left_middle")
        .getWindowPosition().should.become({ x: 87, y: 210})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftBottom = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_left_bottom').click().sleep(800)
        .title().should.become("menu_left_bottom")
        .getWindowPosition().should.become({ x: 87, y: 296})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightTop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_right_top').click().sleep(800)
        .title().should.become("menu_right_top")
        .getWindowPosition().should.become({ x: 105, y: 124})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightMiddle = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_right_middle').click().sleep(800)
        .title().should.become("menu_right_middle")
        .getWindowPosition().should.become({ x: 107, y: 210})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightBottom = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('context_menu').click().sleep(200)
        .title().should.become("Context Menu")
        .elementById('menu_right_bottom').click().sleep(800)
        .title().should.become("menu_right_bottom")
        .getWindowPosition().should.become({ x: 108, y: 296})
        .back().sleep(800)
        .title().should.become("Context Menu")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

