let wd = require("wd");

exports.testSendKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .elementById('editable').text().should.become("left")
        .elementById('editable').type(["aaaa"])
        .elementById('editable').text().should.become("leftaaaa")
        
        .elementById('editable').type(["中文"])
        .elementById('editable').text().should.become("leftaaaa中文")

        .elementById('editable').sendKeys(wd.SPECIAL_KEYS["Up arrow"])
        .elementById('editable').text().should.become("right")
        .elementById('editable').sendKeys(wd.SPECIAL_KEYS["Up arrow"])
        .elementById('editable').text().should.become("center")
        
        .elementById('editable').sendKeys(wd.SPECIAL_KEYS["Down arrow"])
        .elementById('editable').text().should.become("right")
        .elementById('editable').sendKeys(wd.SPECIAL_KEYS["Down arrow"])
        .elementById('editable').text().should.become("left")

        .elementById('old_value').text().should.become("right")
        .elementById('value').text().should.become("left")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testEditable = function (driver) {
    var tapPopup = new wd.TouchAction(driver);
    tapPopup.tap({ el: null, x: 20, y: 107 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .elementById('editable_dropdown').click().sleep(200)
        .getWindowPosition().should.become({ x: 10, y: 65 })
        .getWindowSize().should.become({ width: 200, height: 92 })
        .performTouchAction(tapPopup).sleep(200)
        .title().should.become("ComboBox")
        .elementById('editable').text().should.become("center")
        .elementById('old_value').text().should.become("left")
        .elementById('value').text().should.become("center")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testReadonlyOpen = function (driver) {
    var tapPopup = new wd.TouchAction(driver);
    tapPopup.tap({ el: null, x: 20, y: 153 });

    var tapComboBox = new wd.TouchAction(driver);
    tapComboBox.tap({ el: null, x: 20, y: 90 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .performTouchAction(tapComboBox).sleep(200)
        .getWindowPosition().should.become({ x: 10, y: 110 })
        .getWindowSize().should.become({ width: 200, height: 128 })
        .performTouchAction(tapPopup).sleep(200)
        .title().should.become("ComboBox")
        .elementById('readonly_open_window').text().should.become("green")
        .elementById('old_value').text().should.become("red")
        .elementById('value').text().should.become("green")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testComboBoxEx = function (driver) {
    var tapPopup = new wd.TouchAction(driver);
    tapPopup.tap({ el: null, x: 20, y: 208});

    var tapComboBox = new wd.TouchAction(driver);
    tapComboBox.tap({ el: null, x: 190, y: 150});

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .performTouchAction(tapComboBox).sleep(200)
        .getWindowPosition().should.become({ x: 10, y: 160 })
        .getWindowSize().should.become({ width: 200, height: 152})
        .performTouchAction(tapPopup).sleep(200)
        .title().should.become("ComboBox")
        .elementById('combo_box_ex').text().should.become("2")
        .elementById('old_value').text().should.become("1")
        .elementById('value').text().should.become("2")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testBottom = function (driver) {
    var tapPopup = new wd.TouchAction(driver);
    tapPopup.tap({ x: 43, y: 426 });

    var tapComboBox = new wd.TouchAction(driver);
    tapComboBox.tap({ x: 60, y: 454 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .performTouchAction(tapComboBox).sleep(200)
        .getWindowPosition().should.become({ x: 5, y: 383 })
        .getWindowSize().should.become({ width: 144, height: 62 })
        .performTouchAction(tapPopup).sleep(200)
        .title().should.become("ComboBox")
        .elementById('bottom').text().should.become("取消")
        .elementById('old_value').text().should.become("确定")
        .elementById('value').text().should.become("取消")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testBottomRightAndNoTr = function (driver) {
    var tapPopup = new wd.TouchAction(driver);
    tapPopup.tap({ x: 220, y: 426 });

    var tapComboBox = new wd.TouchAction(driver);
    tapComboBox.tap({ x: 220, y: 450 });

    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('combo_box').click().sleep(200)
        .title().should.become("ComboBox")
        .performTouchAction(tapComboBox).sleep(200)
        .getWindowPosition().should.become({ x: 171, y: 383 })
        .getWindowSize().should.become({ width: 144, height: 62 })
        .performTouchAction(tapPopup).sleep(200)
        .title().should.become("ComboBox")
        .elementById('bottom_right').text().should.become("cancel")
        .elementById('old_value').text().should.become("确定")
        .elementById('value').text().should.become("取消")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

