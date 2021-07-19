
let wd = require("wd");

exports.testChinese = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('locale').click().sleep(200)
        .title().should.become("Locale")
        .elementById('chinese').click().sleep(300)
        .elementById('status').text().should.become("zh_CN")
        .elementById('chinese').text().should.become("中文")
        .elementById('en_zh').text().should.become('<"英文&中文">')
        .elementById('status1').text().should.become("none")
        .back().sleep(200)
        .title().should.become("Regression Test")
}

exports.testEnglish = function (driver) {
    return driver
        .back().sleep(200)
        .title().should.become("Regression Test")
        .elementById('locale').click().sleep(200)
        .title().should.become("Locale")
        .elementById('english').click().sleep(300)
        .elementById('status').text().should.become("en_US")
        .elementById('chinese').text().should.become("Chinese")
        .elementById('en_zh').text().should.become('<"en&zh">')
        .elementById('status1').text().should.become("none")
        .back().sleep(200)
        .title().should.become("Regression Test")
}
