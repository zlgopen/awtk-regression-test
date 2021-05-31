let wd = require("wd");

exports.testDefault = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(800)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['1','2','3']).sleep(200)
        .elementById('mledit.default').text().should.become("abc 123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("abc 1")
        
        .elementById('mledit.default').getAttribute('focused').should.become(true)
        .elementById('mledit.default').getAttribute('focusable').should.become(true)

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftRightKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("ac")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("ac")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("c")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testHomeEndKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Home']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['End']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("ab")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectAll= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('mledit.default').text().should.become("")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCopyPaste = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+c>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('mledit.default').text().should.become("abcabc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCutPaste = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+x>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('mledit.default').text().should.become("abcabc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUndoRedo = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('mledit.default').text().should.become("ab")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('mledit.default').text().should.become("a")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('mledit.default').text().should.become("")
        
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('mledit.default').text().should.become("a")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('mledit.default').text().should.become("ab")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectLeft = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('mledit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectRight = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('mledit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('mledit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectUp= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc\n123']).sleep(200)
        .elementById('mledit.default').text().should.become("abc\n123")
        .elementById('wm').sendKeys(['<shift+up>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+up>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('mledit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectDown= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('mledit').click().sleep(200)
        .title().should.become("MLEdit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc\n123']).sleep(200)
        .elementById('mledit.default').text().should.become("abc\n123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Up arrow']).sleep(200)
        .elementById('wm').sendKeys(['<shift+down>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+down>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('mledit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
