let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('progress_bar').click().sleep(200)
        .title().should.become("ProgressBar")
        .elementById('h1').getAttribute("value").should.become(10)
        .elementById('inc').click().sleep(200)
        .elementById('h1').getAttribute("value").should.become(11)
        .elementById('dec').click().sleep(200)
        .elementById('h1').getAttribute("value").should.become(10)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
