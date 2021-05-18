exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('font').click().sleep(200)
        .title().should.become("Font")
        .elementById('bold').getAttribute('w').should.become(82)
        .elementById('bold').getAttribute('h').should.become(26)
        .elementById('led').getAttribute('w').should.become(116)
        .elementById('led').getAttribute('h').should.become(30)
        .elementById('italic').getAttribute('w').should.become(119)
        .elementById('italic').getAttribute('h').should.become(30)
        .elementById('thin').getAttribute('w').should.become(122)
        .elementById('thin').getAttribute('h').should.become(38)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUnload = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('font').click().sleep(200)
        .title().should.become("Font")
        .elementById('unload').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUnloadAll = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('font').click().sleep(200)
        .title().should.become("Font")
        .elementById('unload_all').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testShrink = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('font').click().sleep(200)
        .title().should.become("Font")
        .elementById('shrink').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
