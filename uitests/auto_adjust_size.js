
exports.test = function(driver) {
    return driver
          .elementById('current_window').text().should.become("Regression Test")
          .elementById('auto_adjust_size').click().sleep(100)
          .elementById('current_window').text().should.become("Auto Adjust Size")
          .elementById('label1').getAttribute('x').should.become(10)
          .elementById('label1').getAttribute('w').should.become(81)
          .elementById('label1').getAttribute('h').should.become(20)
          .elementById('label2').getAttribute('w').should.become(96)
          .elementById('label2').getAttribute('h').should.become(40)
          .back().sleep(100)
          .elementById('current_window').text().should.become("Regression Test")
}
