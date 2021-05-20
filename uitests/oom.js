let wd = require("wd");

exports.testGui = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('oom').click().sleep(200)
        .title().should.become("Out of memory")
        .elementById('gui').click().sleep(200)
        .elementById('status1').text().should.become("low memory")
        .elementById('status2').text().should.become("oom")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testNoneGui = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('oom').click().sleep(200)
        .title().should.become("Out of memory")
        .elementById('nonegui').click().sleep(200)
        .elementById('status1').text().should.become("low memory")
        .elementById('status2').text().should.become("oom")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
