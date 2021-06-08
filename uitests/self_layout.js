let wd = require("wd");
exports.testLeftTop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l1').getAttribute('x').should.become(10)
        .elementById('l1').getAttribute('y').should.become(0)
        .elementById('l1').getAttribute('w').should.become(32)
        .elementById('l1').getAttribute('h').should.become(23)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftMiddle= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l2').getAttribute('x').should.become(10)
        .elementById('l2').getAttribute('y').should.become(210)
        .elementById('l2').getAttribute('w').should.become(100)
        .elementById('l2').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testLeftBottom = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l3').getAttribute('x').should.become(10)
        .elementById('l3').getAttribute('y').should.become(420)
        .elementById('l3').getAttribute('w').should.become(100)
        .elementById('l3').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCenterTop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l4').getAttribute('x').should.become(100)
        .elementById('l4').getAttribute('y').should.become(0)
        .elementById('l4').getAttribute('w').should.become(100)
        .elementById('l4').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCenterMiddle= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l5').getAttribute('x').should.become(110)
        .elementById('l5').getAttribute('y').should.become(230)
        .elementById('l5').getAttribute('w').should.become(100)
        .elementById('l5').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testCenterBottom = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l6').getAttribute('x').should.become(120)
        .elementById('l6').getAttribute('y').should.become(390)
        .elementById('l6').getAttribute('w').should.become(100)
        .elementById('l6').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightTop = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l7').getAttribute('x').should.become(210)
        .elementById('l7').getAttribute('y').should.become(0)
        .elementById('l7').getAttribute('w').should.become(100)
        .elementById('l7').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightMiddle= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l8').getAttribute('x').should.become(220)
        .elementById('l8').getAttribute('y').should.become(230)
        .elementById('l8').getAttribute('w').should.become(100)
        .elementById('l8').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testRightBottom = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('self_layout').click().sleep(200)
        .title().should.become("Self Layout")
        .elementById('l9').getAttribute('x').should.become(220)
        .elementById('l9').getAttribute('y').should.become(390)
        .elementById('l9').getAttribute('w').should.become(100)
        .elementById('l9').getAttribute('h').should.become(30)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}
