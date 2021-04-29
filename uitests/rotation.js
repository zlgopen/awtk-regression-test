
exports.testRotation0 = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('rotation').click().sleep(100)
        .title().should.become("Rotation")
        .getWindowSize().should.become({ width: 320, height: 480 })

        .elementById('0').click().sleep(100)
        .getWindowSize().should.become({ width: 320, height: 480 })
        .elementById('back').getLocation().should.become({ x: 20, y: 388 })

        .elementById('0').click().sleep(100)
        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testRotation180 = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('rotation').click().sleep(100)
        .title().should.become("Rotation")
        .getWindowSize().should.become({ width: 320, height: 480 })

        .elementById('180').click().sleep(100)
        .getWindowSize().should.become({ width: 320, height: 480 })
        .elementById('back').getLocation().should.become({ x: 20, y: 388 })

        .elementById('0').click().sleep(100)
        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testRotation90 = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('rotation').click().sleep(100)
        .title().should.become("Rotation")
        .getWindowSize().should.become({ width: 320, height: 480 })

        .elementById('90').click().sleep(100)
        .getWindowSize().should.become({ width: 480, height: 320 })
        .elementById('back').getLocation().should.become({ x: 20, y: 260 })

        .elementById('0').click().sleep(100)
        .back().sleep(100)
        .title().should.become("Regression Test")
}

exports.testRotation270 = function (driver) {
    return driver
        .back().sleep(100)
        .title().should.become("Regression Test")
        .elementById('rotation').click().sleep(100)
        .title().should.become("Rotation")
        .getWindowSize().should.become({ width: 320, height: 480 })

        .elementById('270').click().sleep(100)
        .getWindowSize().should.become({ width: 480, height: 320 })
        .elementById('back').getLocation().should.become({ x: 20, y: 260 })

        .elementById('0').click().sleep(100)
        .back().sleep(100)
        .title().should.become("Regression Test")
}

