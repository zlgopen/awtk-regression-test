"use strict";

let Q = require('q');
let wd = require("wd");
let _ = require('underscore');
require("awtk-appium-js-helpers/setup.js");
let serverConfigs = require('awtk-appium-js-helpers/appium-servers');
let startApp = require("awtk-appium-js-helpers/start-app").startApp;

let auto_adjust_size = require('./auto_adjust_size')
let rotation = require('./rotation')
let dialogs = require('./dialogs')
let combo_box = require('./combo_box')

const appName = '../bin/demo'

describe("awtk simple", function () {
  let driver;
  let allPassed = true;
  this.timeout(300000);

  before(async function () {
    let serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("awtk-appium-js-helpers/logging").configure(driver);

    await startApp(appName);

    let desired = _.clone(require("awtk-appium-js-helpers/caps").awtk);
    return driver.init(desired);
  });

  after(function () {
    return driver.quit()
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("text_bottom_right_and_no_tr", function () {
    return combo_box.testBottomRightAndNoTr(driver);
  });
  it("text_combo_box_ex", function () {
    return combo_box.testComboBoxEx(driver);
  });

  it("text_bottom", function () {
    return combo_box.testBottom(driver);
  });
  it("text_readonly_open", function () {
    return combo_box.testReadonlyOpen(driver);
  });
  it("text_editable", function () {
    return combo_box.testEditable(driver);
  });

  it("test_confirm", function () {
    return dialogs.testConfirm(driver);
  });

  it("test_warn", function () {
    return dialogs.testWarn(driver);
  });
  it("test_info", function () {
    return dialogs.testInfo(driver);
  });
  it("test_toast", function () {
    return dialogs.testToast(driver);
  });

  it("auto_adjust_size_english", function () {
    return auto_adjust_size.testEnglish(driver);
  });
  it("auto_adjust_size_max_w", function () {
    return auto_adjust_size.testMaxW(driver);
  });
  it("auto_adjust_size_margin", function () {
    return auto_adjust_size.testChineseMargin(driver);
  });
  it("auto_adjust_size_chinese", function () {
    return auto_adjust_size.testChinese(driver);
  });

  it("rotation_0", function () {
    return rotation.testRotation0(driver);
  });
  it("rotation_90", function () {
    return rotation.testRotation90(driver);
  });
  it("rotation_180", function () {
    return rotation.testRotation180(driver);
  });
  it("rotation_270", function () {
    return rotation.testRotation270(driver);
  });
});

