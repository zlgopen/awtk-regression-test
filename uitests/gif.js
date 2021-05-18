let wd = require("wd");

exports.testClickable= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gif').click().sleep(200)
        .title().should.become("Gif Image")
        .elementById('bee').click().sleep(200)
        .elementById('status').text().should.become("bee:0")
        .elementById('bee').click().sleep(200)
        .elementById('status').text().should.become("bee:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickableSpace = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gif').click().sleep(200)
        .title().should.become("Gif Image")
        .elementById('bee').sendKeys(wd.SPECIAL_KEYS.Space).sleep(100)
        .elementById('status').text().should.become("bee:0")
        .elementById('bee').sendKeys(wd.SPECIAL_KEYS.Space).sleep(100)
        .elementById('status').text().should.become("bee:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testClickableReturn = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gif').click().sleep(200)
        .title().should.become("Gif Image")
        .elementById('bee').sendKeys(wd.SPECIAL_KEYS.Return).sleep(100)
        .elementById('status').text().should.become("bee:0")
        .elementById('bee').sendKeys(wd.SPECIAL_KEYS.Return).sleep(100)
        .elementById('status').text().should.become("bee:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testPause = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gif').click().sleep(200)
        .title().should.become("Gif Image")
        .elementById('pause').click().sleep(200)
        .elementById('status').text().should.become("bee:0")
        .elementById('play').click().sleep(200)
        .elementById('status').text().should.become("bee:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testStop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gif').click().sleep(200)
        .title().should.become("Gif Image")
        .elementById('stop').click().sleep(200)
        .elementById('status').text().should.become("bee:0")
        .elementById('play').click().sleep(200)
        .elementById('status').text().should.become("bee:1")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
