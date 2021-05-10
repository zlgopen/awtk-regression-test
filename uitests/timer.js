
let wd = require("wd");

exports.testTimer = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('timer').click().sleep(200)
        .title().should.become("Timer")
        .elementById('start_timer').click().sleep(520)
        .elementById('status').text().should.become("1")
        .sleep(520)
        .elementById('status').text().should.become("2")
        .elementById('stop_timer').click().sleep(520)
        .sleep(520)
        .elementById('status').text().should.become("2")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testIdle= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('timer').click().sleep(200)
        .title().should.become("Timer")
        .elementById('start_idle').click().sleep(20)
        .elementById('status').text().should.become("1")
        .elementById('start_idle').click().sleep(20)
        .elementById('status').text().should.become("2")
        .elementById('start_idle').click().sleep(20)
        .elementById('status').text().should.become("3")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
