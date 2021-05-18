
let wd = require("wd");

exports.testClickable= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image').click().sleep(200)
        .title().should.become("Image")
        .elementById('image1').click().sleep(200)
        .elementById('status').text().should.become("image1:0")
        .elementById('image1').click().sleep(200)
        .elementById('status').text().should.become("image1:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testSelectable= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image').click().sleep(200)
        .title().should.become("Image")
        .elementById('image2').click().sleep(200)
        .elementById('status').text().should.become("image2:1")
        .elementById('image2').click().sleep(200)
        .elementById('status').text().should.become("image2:0")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUnloadAll= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image').click().sleep(200)
        .title().should.become("Image")
        .elementById('unload_all').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testUnloadUnused= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image').click().sleep(200)
        .title().should.become("Image")
        .elementById('unload_unused').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testOther= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image').click().sleep(200)
        .title().should.become("Image")
        .elementById('other_test').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
