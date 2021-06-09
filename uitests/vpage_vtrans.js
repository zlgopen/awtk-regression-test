let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('vpage_vtrans').click().sleep(200)
        .title().should.become("VPage V Translate")

        .elementById('close').text().should.become("close")
        .elementById('open').text().should.become("page1")
        .elementById('will_open').text().should.become("page1")
        
        .elementById('b2').click().sleep(700)
        .elementById('close').text().should.become("page1")
        .elementById('open').text().should.become("page2")
        .elementById('will_open').text().should.become("page2")
        
        .elementById('b3').click().sleep(700)
        .elementById('close').text().should.become("page2")
        .elementById('open').text().should.become("page3")
        .elementById('will_open').text().should.become("page3")
        
        .elementById('b4').click().sleep(700)
        .elementById('close').text().should.become("page3")
        .elementById('open').text().should.become("page4")
        .elementById('will_open').text().should.become("page4")

        .back().sleep(200)
        .title().should.become("Regression Test")
}
