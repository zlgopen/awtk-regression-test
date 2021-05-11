
let wd = require("wd");

exports.testSwitchTo= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('navigator1').click().sleep(200)
        .title().should.become("Navigator1")
        .elementById('open_and_not_close').click().sleep(100)
        .title().should.become("Navigator2")
        .elementById('switch_to').click().sleep(100)
        .title().should.become("Navigator1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testBackToHome= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('navigator1').click().sleep(200)
        .title().should.become("Navigator1")
        .elementById('open_and_not_close').click().sleep(100)
        .title().should.become("Navigator2")
        .elementById('back_to_home').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testBackToHome1= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('navigator1').click().sleep(200)
        .title().should.become("Navigator1")
        .elementById('open_and_close').click().sleep(100)
        .title().should.become("Navigator2")
        .elementById('back_to_home').click().sleep(100)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
