let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('gauge').click().sleep(200)
        .title().should.become("Gauge")

        .elementById('p1').getAttribute('angle').should.become(0)
        .elementById('p2').getAttribute('angle').should.become(0)
        .elementById('p3').getAttribute('angle').should.become(0)

        .elementById('inc').click().sleep(100)
        .elementById('p1').getAttribute('angle').should.become(10)
        .elementById('p2').getAttribute('angle').should.become(10)
        .elementById('p3').getAttribute('angle').should.become(10)
        
        .elementById('dec').click().sleep(100)
        .elementById('p1').getAttribute('angle').should.become(0)
        .elementById('p2').getAttribute('angle').should.become(0)
        .elementById('p3').getAttribute('angle').should.become(0)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}
