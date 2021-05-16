
let wd = require("wd");
exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('1row').getAttribute('x').should.become(12)
        .elementById('1row').getAttribute('y').should.become(9)
        .elementById('1row').getAttribute('w').should.become(51)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(150)
        .elementById('1col').getAttribute('y').should.become(28)
        .elementById('1col').getAttribute('w').should.become(51)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(216)
        .elementById('3x3').getAttribute('y').should.become(4)
        .elementById('3x3').getAttribute('w').should.become(102)
        .elementById('3x3').getAttribute('h').should.become(69)
        
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

exports.test1Row= function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('1row').click().sleep(200)
        .elementById('1row').getAttribute('x').should.become(12)
        .elementById('1row').getAttribute('y').should.become(8)
        .elementById('1row').getAttribute('w').should.become(30)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(86)
        .elementById('1col').getAttribute('y').should.become(177)
        .elementById('1col').getAttribute('w').should.become(30)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(130)
        .elementById('3x3').getAttribute('y').should.become(3)
        .elementById('3x3').getAttribute('w').should.become(60)
        .elementById('3x3').getAttribute('h').should.become(219)
        
        .elementById('2x3').getAttribute('x').should.become(194)
        .elementById('2x3').getAttribute('y').should.become(97)
        .elementById('2x3').getAttribute('w').should.become(60)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(264)
        .elementById('3x2').getAttribute('y').should.become(3)
        .elementById('3x2').getAttribute('w').should.become(48)
        .elementById('3x2').getAttribute('h').should.become(219)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.test1Col = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('1col').click().sleep(200)
        .elementById('1row').getAttribute('x').should.become(12)
        .elementById('1row').getAttribute('y').should.become(9)
        .elementById('1row').getAttribute('w').should.become(158)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(150)
        .elementById('1col').getAttribute('y').should.become(43)
        .elementById('1col').getAttribute('w').should.become(158)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(2)
        .elementById('3x3').getAttribute('y').should.become(92)
        .elementById('3x3').getAttribute('w').should.become(316)
        .elementById('3x3').getAttribute('h').should.become(40)
        
        .elementById('2x3').getAttribute('x').should.become(2)
        .elementById('2x3').getAttribute('y').should.become(141)
        .elementById('2x3').getAttribute('w').should.become(316)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(34)
        .elementById('3x2').getAttribute('y').should.become(180)
        .elementById('3x2').getAttribute('w').should.become(252)
        .elementById('3x2').getAttribute('h').should.become(40)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.test3x3 = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('3x3').click().sleep(200)
        .elementById('1row').getAttribute('x').should.become(13)
        .elementById('1row').getAttribute('y').should.become(8)
        .elementById('1row').getAttribute('w').should.become(51)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(150)
        .elementById('1col').getAttribute('y').should.become(28)
        .elementById('1col').getAttribute('w').should.become(51)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(215)
        .elementById('3x3').getAttribute('y').should.become(3)
        .elementById('3x3').getAttribute('w').should.become(102)
        .elementById('3x3').getAttribute('h').should.become(70)
        
        .elementById('2x3').getAttribute('x').should.become(3)
        .elementById('2x3').getAttribute('y').should.become(97)
        .elementById('2x3').getAttribute('w').should.become(102)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(119)
        .elementById('3x2').getAttribute('y').should.become(77)
        .elementById('3x2').getAttribute('w').should.become(81)
        .elementById('3x2').getAttribute('h').should.become(70)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.test2x3 = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('2x3').click().sleep(200)
        .elementById('1row').getAttribute('x').should.become(13)
        .elementById('1row').getAttribute('y').should.become(8)
        .elementById('1row').getAttribute('w').should.become(51)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(150)
        .elementById('1col').getAttribute('y').should.become(65)
        .elementById('1col').getAttribute('w').should.become(51)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(215)
        .elementById('3x3').getAttribute('y').should.become(3)
        .elementById('3x3').getAttribute('w').should.become(102)
        .elementById('3x3').getAttribute('h').should.become(107)
        
        .elementById('2x3').getAttribute('x').should.become(3)
        .elementById('2x3').getAttribute('y').should.become(152)
        .elementById('2x3').getAttribute('w').should.become(102)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(119)
        .elementById('3x2').getAttribute('y').should.become(114)
        .elementById('3x2').getAttribute('w').should.become(81)
        .elementById('3x2').getAttribute('h').should.become(107)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.test3x2 = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('children_layout').click().sleep(200)
        .title().should.become("Children Layout")
        .elementById('3x2').click().sleep(200)
        .elementById('1row').getAttribute('x').should.become(12)
        .elementById('1row').getAttribute('y').should.become(8)
        .elementById('1row').getAttribute('w').should.become(78)
        .elementById('1row').getAttribute('h').should.become(40)
        
        .elementById('1col').getAttribute('x').should.become(230)
        .elementById('1col').getAttribute('y').should.become(28)
        .elementById('1col').getAttribute('w').should.become(78)
        .elementById('1col').getAttribute('h').should.become(40)

        .elementById('3x3').getAttribute('x').should.become(2)
        .elementById('3x3').getAttribute('y').should.become(77)
        .elementById('3x3').getAttribute('w').should.become(156)
        .elementById('3x3').getAttribute('h').should.become(70)
        
        .elementById('2x3').getAttribute('x').should.become(162)
        .elementById('2x3').getAttribute('y').should.become(97)
        .elementById('2x3').getAttribute('w').should.become(156)
        .elementById('2x3').getAttribute('h').should.become(30)
        
        .elementById('3x2').getAttribute('x').should.become(18)
        .elementById('3x2').getAttribute('y').should.become(151)
        .elementById('3x2').getAttribute('w').should.become(124)
        .elementById('3x2').getAttribute('h').should.become(70)
        
        .back().sleep(200)
        .title().should.become("Regression Test")
}
