
exports.testChinese= function(driver) {
    return driver
          .back().sleep(100)
          .title().should.become("Regression Test")
          .elementById('auto_adjust_size').click().sleep(100)
          .title().should.become("Auto Adjust Size")
          //test chinese
          .elementById('chinese').click().sleep(100)
          .elementById('label1').getAttribute('x').should.become(10)
          .elementById('label1').getAttribute('w').should.become(81)
          .elementById('label1').getAttribute('h').should.become(20)
          .elementById('label2').getAttribute('w').should.become(96)
          .elementById('label2').getAttribute('h').should.become(40)
          .elementById('label3').getAttribute('w').should.become(108)
          .elementById('label3').getAttribute('h').should.become(20)
          .elementById('label4').getAttribute('w').should.become(81)
          .elementById('label4').getAttribute('h').should.become(20)
          .back().sleep(100)
          .title().should.become("Regression Test")
}

exports.testEnglish = function(driver) {
    return driver
          .back().sleep(100)
          .title().should.become("Regression Test")
          .elementById('auto_adjust_size').click().sleep(100)
          .title().should.become("Auto Adjust Size")
          .elementById('english').click().sleep(100)
          .elementById('label1').getAttribute('x').should.become(10)
          .elementById('label1').getAttribute('w').should.become(81)
          .elementById('label1').getAttribute('h').should.become(20)
          .elementById('label2').getAttribute('w').should.become(96)
          .elementById('label2').getAttribute('h').should.become(40)
          .elementById('label3').getAttribute('w').should.become(92)
          .elementById('label3').getAttribute('h').should.become(20)
          .elementById('label4').getAttribute('w').should.become(81)
          .elementById('label4').getAttribute('h').should.become(20)
          .back().sleep(100)
          .title().should.become("Regression Test")
}
