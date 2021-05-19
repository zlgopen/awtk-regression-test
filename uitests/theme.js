exports.testDark = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('theme').click().sleep(200)
        .title().should.become("Theme")
        .elementById('dark').click().sleep(200)
        .elementById('status').text().should.become("dark")
        .elementById('status').getAttribute('w').should.become(60)
        .elementById('status').getAttribute('h').should.become(36)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDefault= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('theme').click().sleep(200)
        .title().should.become("Theme")
        .elementById('default').click().sleep(200)
        .elementById('status').text().should.become("default")
        .elementById('status').getAttribute('w').should.become(55)
        .elementById('status').getAttribute('h').should.become(24)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testDefaultNTimes= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('theme').click().sleep(200)
        .title().should.become("Theme")
        .elementById('default').click().sleep(200)
        .elementById('default').click().sleep(200)
        .elementById('default').click().sleep(200)
        .elementById('default').click().sleep(200)
        .elementById('default').click().sleep(200)
        .elementById('default').click().sleep(200)
        .elementById('status').text().should.become("default")
        .elementById('status').getAttribute('w').should.become(55)
        .elementById('status').getAttribute('h').should.become(24)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

