let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('3keys').click().sleep(200)
        .title().should.become("Simple Keyboard")
        .elementById('value').text().should.become("100")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(200)
        .elementById('value').text().should.become("101")

        //reset
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(200)
        .elementById('value').text().should.become("0")

        //dec
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(200)
        .elementById('value').text().should.become("-1")
       
        //modify edit
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(800)
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Down arrow"]).sleep(200)
        .elementById('simple_keyboard.value').text().should.become("-2")

        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(200)
        .elementById('simple_keyboard.value').text().should.become("-1")
       
        //back to dec button
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS["Up arrow"]).sleep(800)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Return).sleep(200)

        .elementById('simple_keyboard.value').text().should.become("-2")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
