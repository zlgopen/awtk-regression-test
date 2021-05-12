
exports.testChinese = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_adjust_size').click().sleep(200)
        .title().should.become("Auto Adjust Size")
        //test chinese
        .elementById('chinese').click().sleep(200)
        .elementById('label1').getAttribute('x').should.become(10)
        .elementById('label1').getAttribute('w').should.become(81)
        .elementById('label1').getAttribute('h').should.become(24)
        .elementById('label2').getAttribute('w').should.become(96)
        .elementById('label2').getAttribute('h').should.become(44)
        .elementById('label3').getAttribute('w').should.become(108)
        .elementById('label3').getAttribute('h').should.become(24)
        .elementById('label4').getAttribute('w').should.become(81)
        .elementById('label4').getAttribute('h').should.become(24)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testEnglish = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_adjust_size').click().sleep(200)
        .title().should.become("Auto Adjust Size")
        //test english
        .elementById('english').click().sleep(200)
        .elementById('label1').getAttribute('x').should.become(10)
        .elementById('label1').getAttribute('w').should.become(81)
        .elementById('label1').getAttribute('h').should.become(24)
        .elementById('label2').getAttribute('w').should.become(96)
        .elementById('label2').getAttribute('h').should.become(44)
        .elementById('label3').getAttribute('w').should.become(92)
        .elementById('label3').getAttribute('h').should.become(24)
        .elementById('label4').getAttribute('w').should.become(81)
        .elementById('label4').getAttribute('h').should.become(24)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testMaxW = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_adjust_size_max_w').click().sleep(200)
        //test max_w
        .elementById('l1').getAttribute('x').should.become(10)
        .elementById('l1').getAttribute('y').should.become(10)
        .elementById('l1').getAttribute('w').should.become(47)
        .elementById('l1').getAttribute('h').should.become(28)

        .elementById('l2').getAttribute('x').should.become(10)
        .elementById('l2').getAttribute('y').should.become(50)
        .elementById('l2').getAttribute('w').should.become(100)
        .elementById('l2').getAttribute('h').should.become(68)

        .elementById('l3').getAttribute('x').should.become(10)
        .elementById('l3').getAttribute('y').should.become(140)
        .elementById('l3').getAttribute('w').should.become(200)
        .elementById('l3').getAttribute('h').should.become(48)

        .elementById('r1').getAttribute('x').should.become(267)
        .elementById('r1').getAttribute('y').should.become(10)
        .elementById('r1').getAttribute('w').should.become(47)
        .elementById('r1').getAttribute('h').should.become(28)

        .elementById('r2').getAttribute('x').should.become(210)
        .elementById('r2').getAttribute('y').should.become(50)
        .elementById('r2').getAttribute('w').should.become(100)
        .elementById('r2').getAttribute('h').should.become(68)

        .elementById('r3').getAttribute('x').should.become(110)
        .elementById('r3').getAttribute('y').should.become(240)
        .elementById('r3').getAttribute('w').should.become(200)
        .elementById('r3').getAttribute('h').should.become(48)
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testChineseMargin = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_adjust_size_margin').click().sleep(200)
        .title().should.become("Label Margin Test Margin")
        //test chinese
        .elementById('chinese').click().sleep(200)
        .elementById('label1').getAttribute('x').should.become(10)
        .elementById('label1').getAttribute('w').should.become(117)
        .elementById('label1').getAttribute('h').should.become(55)
        .elementById('label2').getAttribute('w').should.become(132)
        .elementById('label2').getAttribute('h').should.become(75)
        .elementById('label3').getAttribute('w').should.become(144)
        .elementById('label3').getAttribute('h').should.become(55)
        .elementById('label4').getAttribute('w').should.become(117)
        .elementById('label4').getAttribute('h').should.become(55)
        .back().sleep(200)
        .title().should.become("Regression Test")
}
