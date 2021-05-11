let wd = require("wd");

exports.testYes = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('closable').click().sleep(200)
        .title().should.become("Closable")
        .elementById('yes').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testNo = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('closable').click().sleep(200)
        .title().should.become("Closable")
        .elementById('no').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Closable")
        .elementById('yes').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testConfirm = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('closable').click().sleep(200)
        .title().should.become("Closable")
        .elementById('confirm').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Confirm")
        .elementById('ok').click().sleep(200)
        .title().should.become("Regression Test")
}
