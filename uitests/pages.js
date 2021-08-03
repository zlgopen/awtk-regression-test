let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('pages').click().sleep(200)
        .title().should.become("Pages")

        .elementById('remove1').click().sleep(100)
        .elementById('status').text().should.become("3")
        
        .elementById('remove2').click().sleep(100)
        .elementById('status').text().should.become("2")
        
        .elementById('remove3').click().sleep(100)
        .elementById('status').text().should.become("1")
        
        .elementById('remove4').click().sleep(100)
        .elementById('status').text().should.become("0")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
