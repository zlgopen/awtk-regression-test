let wd = require("wd");

exports.testDefault = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['1','2','3']).sleep(200)
        .elementById('edit.default').text().should.become("abc 123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("abc 1")
        
        .elementById('edit.default').getAttribute('focused').should.become(true)
        .elementById('edit.default').getAttribute('focusable').should.become(true)
        .elementById('edit.default').getAttribute('min').should.become(0)
        .elementById('edit.default').getAttribute('max').should.become(1024)
        .elementById('edit.default').getAttribute('input_type').should.become(0)
        .elementById('edit.default').getAttribute('readonly').should.become(false)
        .elementById('edit.default').getAttribute('cancelable').should.become(false)
        .elementById('edit.default').getAttribute('auto_fix').should.become(false)
        .elementById('edit.default').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testAscii= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('ascii').click().sleep(600)
        .title().should.become("kb_ascii")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['1','2','3']).sleep(200)
        .elementById('edit.ascii').text().should.become("abc 123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.ascii').text().should.become("abc 1")
        
        .elementById('edit.ascii').getAttribute('focused').should.become(true)
        .elementById('edit.ascii').getAttribute('focusable').should.become(true)
        .elementById('edit.ascii').getAttribute('min').should.become(0)
        .elementById('edit.ascii').getAttribute('max').should.become(1024)
        .elementById('edit.ascii').getAttribute('input_type').should.become(15)
        .elementById('edit.ascii').getAttribute('readonly').should.become(false)
        .elementById('edit.ascii').getAttribute('cancelable').should.become(false)
        .elementById('edit.ascii').getAttribute('auto_fix').should.become(false)
        .elementById('edit.ascii').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testInt= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('int').click().sleep(600)
        .title().should.become("kb_int")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['-', '1','2','3']).sleep(200)
        .elementById('edit.int').text().should.become("-123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.int').text().should.become("-1")
        
        .elementById('edit.int').getAttribute('focused').should.become(true)
        .elementById('edit.int').getAttribute('focusable').should.become(true)
        .elementById('edit.int').getAttribute('min').should.become(-10)
        .elementById('edit.int').getAttribute('max').should.become(200)
        .elementById('edit.int').getAttribute('input_type').should.become(1)
        .elementById('edit.int').getAttribute('readonly').should.become(false)
        .elementById('edit.int').getAttribute('cancelable').should.become(false)
        .elementById('edit.int').getAttribute('auto_fix').should.become(false)
        .elementById('edit.int').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUInt= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('uint').click().sleep(600)
        .title().should.become("kb_uint")
        .elementById('wm').sendKeys(['a','b','c', '.', '-']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['+', '1','2','3']).sleep(200)
        .elementById('edit.uint').text().should.become("+123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.uint').text().should.become("+1")
        
        .elementById('edit.uint').getAttribute('focused').should.become(true)
        .elementById('edit.uint').getAttribute('focusable').should.become(true)
        .elementById('edit.uint').getAttribute('min').should.become(10)
        .elementById('edit.uint').getAttribute('max').should.become(300)
        .elementById('edit.uint').getAttribute('input_type').should.become(2)
        .elementById('edit.uint').getAttribute('readonly').should.become(false)
        .elementById('edit.uint').getAttribute('cancelable').should.become(false)
        .elementById('edit.uint').getAttribute('auto_fix').should.become(false)
        .elementById('edit.uint').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testFloat= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('float').click().sleep(600)
        .title().should.become("kb_float")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['-', '1','2','.', '3']).sleep(200)
        .elementById('edit.float').text().should.become("-12.3")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.float').text().should.become("-12")
        
        .elementById('edit.float').getAttribute('focused').should.become(true)
        .elementById('edit.float').getAttribute('focusable').should.become(true)
        .elementById('edit.float').getAttribute('min').should.become(-11)
        .elementById('edit.float').getAttribute('max').should.become(201)
        .elementById('edit.float').getAttribute('input_type').should.become(4)
        .elementById('edit.float').getAttribute('readonly').should.become(false)
        .elementById('edit.float').getAttribute('cancelable').should.become(false)
        .elementById('edit.float').getAttribute('auto_fix').should.become(false)
        .elementById('edit.float').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUFloat= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('ufloat').click().sleep(600)
        .title().should.become("kb_ufloat")
        .elementById('wm').sendKeys(['a','b','c', '.', '-']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['+', '1','2','.','3']).sleep(200)
        .elementById('edit.ufloat').text().should.become("+12.3")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.ufloat').text().should.become("+12")
        
        .elementById('edit.ufloat').getAttribute('focused').should.become(true)
        .elementById('edit.ufloat').getAttribute('focusable').should.become(true)
        .elementById('edit.ufloat').getAttribute('min').should.become(11)
        .elementById('edit.ufloat').getAttribute('max').should.become(301)
        .elementById('edit.ufloat').getAttribute('input_type').should.become(5)
        .elementById('edit.ufloat').getAttribute('readonly').should.become(false)
        .elementById('edit.ufloat').getAttribute('cancelable').should.become(false)
        .elementById('edit.ufloat').getAttribute('auto_fix').should.become(false)
        .elementById('edit.ufloat').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testPassword = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('password').click().sleep(600)
        .title().should.become("kb_ascii")
        .elementById('wm').sendKeys(['a','b','c']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS.Space).sleep(200)
        .elementById('wm').sendKeys(['1','2','3']).sleep(200)
        .elementById('edit.password').text().should.become("abc 123")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.password').text().should.become("abc 1")
        
        .elementById('edit.password').getAttribute('focused').should.become(true)
        .elementById('edit.password').getAttribute('focusable').should.become(true)
        .elementById('edit.password').getAttribute('min').should.become(4)
        .elementById('edit.password').getAttribute('max').should.become(32)
        .elementById('edit.password').getAttribute('input_type').should.become(7)
        .elementById('edit.password').getAttribute('readonly').should.become(false)
        .elementById('edit.password').getAttribute('cancelable').should.become(false)
        .elementById('edit.password').getAttribute('auto_fix').should.become(false)
        .elementById('edit.password').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testEmail= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('email').click().sleep(600)
        .title().should.become("kb_ascii")
        .elementById('wm').sendKeys(['a','b','c','@','@']).sleep(200)
        .elementById('wm').sendKeys(['1','2','3', '.', 'com']).sleep(200)
        .elementById('edit.email').text().should.become("abc@123.com")
        
        .elementById('edit.email').getAttribute('focused').should.become(true)
        .elementById('edit.email').getAttribute('focusable').should.become(true)
        .elementById('edit.email').getAttribute('min').should.become(5)
        .elementById('edit.email').getAttribute('max').should.become(32)
        .elementById('edit.email').getAttribute('input_type').should.become(6)
        .elementById('edit.email').getAttribute('readonly').should.become(false)
        .elementById('edit.email').getAttribute('cancelable').should.become(false)
        .elementById('edit.email').getAttribute('auto_fix').should.become(false)
        .elementById('edit.email').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDate= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('date').click().sleep(600)
        .title().should.become("kb_uint")
        .elementById('wm').sendKeys(['a','b','c','@','@']).sleep(200)
        .elementById('wm').sendKeys(['20211001']).sleep(200)
        .elementById('edit.date').text().should.become("2021/10/01")
        
        .elementById('edit.date').getAttribute('focused').should.become(true)
        .elementById('edit.date').getAttribute('focusable').should.become(true)
        .elementById('edit.date').getAttribute('input_type').should.become(10)
        .elementById('edit.date').getAttribute('readonly').should.become(false)
        .elementById('edit.date').getAttribute('cancelable').should.become(false)
        .elementById('edit.date').getAttribute('auto_fix').should.become(false)
        .elementById('edit.date').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testTime = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('time').click().sleep(600)
        .title().should.become("kb_uint")
        .elementById('wm').sendKeys(['a','b','c','@','@']).sleep(200)
        .elementById('wm').sendKeys(['2021']).sleep(200)
        .elementById('edit.time').text().should.become("20:21")
        
        .elementById('edit.time').getAttribute('focused').should.become(true)
        .elementById('edit.time').getAttribute('focusable').should.become(true)
        .elementById('edit.time').getAttribute('input_type').should.become(11)
        .elementById('edit.time').getAttribute('readonly').should.become(false)
        .elementById('edit.time').getAttribute('cancelable').should.become(false)
        .elementById('edit.time').getAttribute('auto_fix').should.become(false)
        .elementById('edit.time').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testTimeFull = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('time_full').click().sleep(600)
        .title().should.become("kb_uint")
        .elementById('wm').sendKeys(['a','b','c','@','@']).sleep(200)
        .elementById('wm').sendKeys(['202112']).sleep(200)
        .elementById('edit.time_full').text().should.become("20:21:12")
        
        .elementById('edit.time_full').getAttribute('focused').should.become(true)
        .elementById('edit.time_full').getAttribute('focusable').should.become(true)
        .elementById('edit.time_full').getAttribute('input_type').should.become(12)
        .elementById('edit.time_full').getAttribute('readonly').should.become(false)
        .elementById('edit.time_full').getAttribute('cancelable').should.become(false)
        .elementById('edit.time_full').getAttribute('auto_fix').should.become(false)
        .elementById('edit.time_full').getAttribute('action_text').should.become("done")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testAutoFixIntMin= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('auto_fix_int').click().sleep(600)
        .title().should.become("kb_int")
        .elementById('edit.auto_fix_int').getAttribute('auto_fix').should.become(true)
        .elementById('edit.auto_fix_int').getAttribute('min').should.become(-10)
        .elementById('edit.auto_fix_int').getAttribute('max').should.become(200)
        .elementById('wm').sendKeys(['-', '1','2','3']).sleep(200)
        .elementById('edit.auto_fix_int').text().should.become("-123")
        .elementById('edit.foo').click().sleep(600)
        .elementById('edit.auto_fix_int').text().should.become("-10")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testAutoFixIntMax= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('auto_fix_int').click().sleep(600)
        .title().should.become("kb_int")
        .elementById('edit.auto_fix_int').getAttribute('auto_fix').should.become(true)
        .elementById('edit.auto_fix_int').getAttribute('min').should.become(-10)
        .elementById('edit.auto_fix_int').getAttribute('max').should.become(200)
        .elementById('wm').sendKeys(['1','2','3', '4']).sleep(200)
        .elementById('edit.auto_fix_int').text().should.become("1234")
        .elementById('edit.foo').click().sleep(600)
        .elementById('edit.auto_fix_int').text().should.become("200")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftRightKey= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("ac")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("ac")
        
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("c")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Right arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testHomeEndKey = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Home']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['End']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("ab")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectAll= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Back space']).sleep(200)
        .elementById('edit.default').text().should.become("")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCopyPaste = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+c>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('edit.default').text().should.become("abcabc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCutPaste = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+a>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+x>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('wm').sendKeys(['<cmd_or_ctrl+v>']).sleep(200)
        .elementById('edit.default').text().should.become("abcabc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUndoRedo = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('edit.default').text().should.become("ab")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('edit.default').text().should.become("a")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+z>']).sleep(200)
        .elementById('edit.default').text().should.become("")
        
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('edit.default').text().should.become("a")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('edit.default').text().should.become("ab")
        .elementById('wm').sendKeys(['<cmd_or_ctrl+y>']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectLeft = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+left>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('edit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectRight = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('edit').click().sleep(200)
        .title().should.become("Edit")
        .elementById('default').click().sleep(600)
        .title().should.become("kb_default")
        .elementById('wm').sendKeys(['abc']).sleep(200)
        .elementById('edit.default').text().should.become("abc")
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(wd.SPECIAL_KEYS['Left arrow']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['<shift+right>']).sleep(200)
        .elementById('wm').sendKeys(['123']).sleep(200)
        .elementById('edit.default').text().should.become("123")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
