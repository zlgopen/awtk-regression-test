
exports.testToast = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('dialogs').click().sleep(100)
        .title().should.become("Dialogs")
        .elementById('english').click().sleep(100)
        .elementById('toast').click().sleep(100)
        .getWindowSize().should.become({ width: 148, height: 50 })
        .sleep(2000)
        .title().should.become("Dialogs")

        .elementById('chinese').click().sleep(100)
        .elementById('toast').click().sleep(100)
        .getWindowSize().should.become({ width: 276, height: 168 })
        .sleep(2000)
        .title().should.become("Dialogs")

        .elementById('english').click().sleep(100)
        .elementById('toast_long').click().sleep(100)
        .getWindowSize().should.become({ width: 276, height: 208 })
        .sleep(2000)
        .title().should.become("Dialogs")
        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testInfo = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('dialogs').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('chinese').click().sleep(100)
        .elementById('info').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 234})
        .elementById('ok').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('english').click().sleep(100)
        .elementById('info_long').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 214 })
        .elementById('ok').click().sleep(100)
        .title().should.become("Dialogs")

        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testWarn = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('dialogs').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('chinese').click().sleep(100)
        .elementById('warn').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 234})
        .elementById('ok').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('english').click().sleep(100)
        .elementById('warn_long').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 214 })
        .elementById('ok').click().sleep(100)
        .title().should.become("Dialogs")

        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testConfirm = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('dialogs').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('chinese').click().sleep(100)
        .elementById('confirm').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 234})
        .elementById('ok').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('chinese').click().sleep(100)
        .elementById('confirm').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 234})
        .elementById('cancel').click().sleep(100)
        .title().should.become("Dialogs")

        .elementById('english').click().sleep(100)
        .elementById('confirm_long').click().sleep(100)
        .getWindowSize().should.become({ width: 296, height: 234 })
        .elementById('ok').click().sleep(100)

        .back().sleep(100)
        .title().should.become("Regression Test")
}

