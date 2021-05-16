
let wd = require("wd");
exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('1row').getAttribute('x').should.become(12)
        .elementById('1row').getAttribute('y').should.become(24)
        .elementById('1row').getAttribute('w').should.become(51)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(150)
        .elementById('1col').getAttribute('y').should.become(28)
        .elementById('1col').getAttribute('w').should.become(51)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('2x2').getAttribute('x').should.become(216)
        .elementById('2x2').getAttribute('y').should.become(4)
        .elementById('2x2').getAttribute('w').should.become(102)
        .elementById('2x2').getAttribute('h').should.become(69)
        
        .elementById('2x3').getAttribute('x').should.become(2)
        .elementById('2x3').getAttribute('y').should.become(97)
        .elementById('2x3').getAttribute('w').should.become(102)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(119)
        .elementById('3x2').getAttribute('y').should.become(78)
        .elementById('3x2').getAttribute('w').should.become(81)
        .elementById('3x2').getAttribute('h').should.become(69)
        
        .elementById('l2').getAttribute('x').should.become(135)
        .elementById('l2').getAttribute('y').should.become(10)
        .elementById('l2').getAttribute('w').should.become(60)
        .elementById('l2').getAttribute('h').should.become(40)

        .back().sleep(200)
        .title().should.become("Regression Test")
}
