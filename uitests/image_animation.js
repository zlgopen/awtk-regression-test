
let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('image_animation').click().sleep(200)
        .title().should.become("Image Animation")
        .elementById('stop').click().sleep(200)
        .elementById('play').click().sleep(200)
        .elementById('stop').click().sleep(200)
        .elementById('play').click().sleep(200)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
