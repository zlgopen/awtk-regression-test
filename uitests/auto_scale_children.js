let wd = require("wd");

exports.testBasic = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('apply').getLocation().should.become({x:20,y:40})
        .elementById('apply').getSize().should.become({width:120, height:30})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testScaleX = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('x').click()
        .elementById('apply').click().sleep(100)
        .elementById('apply').getLocation().should.become({x:40,y:40})
        .elementById('apply').getSize().should.become({width:120, height:30})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testScaleY = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('y').click()
        .elementById('apply').click().sleep(100)
        .elementById('apply').getLocation().should.become({x:20,y:80})
        .elementById('apply').getSize().should.become({width:120, height:30})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testScaleW = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('w').click()
        .elementById('apply').click().sleep(100)
        .elementById('apply').getLocation().should.become({x:20,y:40})
        .elementById('apply').getSize().should.become({width:240, height:30})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testScaleH = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('h').click()
        .elementById('apply').click().sleep(100)
        .elementById('apply').getLocation().should.become({x:20,y:40})
        .elementById('apply').getSize().should.become({width:120, height:60})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testScaleWH = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('auto_scale_children').click().sleep(200)
        .title().should.become("Auto Scale Children")
        .elementById('w').click()
        .elementById('h').click()
        .elementById('apply').click().sleep(100)
        .elementById('apply').getLocation().should.become({x:20,y:40})
        .elementById('apply').getSize().should.become({width:240, height:60})
        .back().sleep(200)
        .title().should.become("Regression Test")
}

