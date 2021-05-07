"use strict";

let Q = require('q');
let wd = require("wd");
let _ = require('underscore');
require("awtk-appium-js-helpers/setup.js");
let serverConfigs = require('awtk-appium-js-helpers/appium-servers');
let startApp = require("awtk-appium-js-helpers/start-app").startApp;

let button = require('./button')
let dialogs = require('./dialogs')
let rotation = require('./rotation')
let combo_box = require('./combo_box')
let auto_adjust_size = require('./auto_adjust_size')

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

  //test button
  it("button_test_long_press", function () {
    return button.testLongPress(driver);
  });
  it("button_test_long_press_on_normal_button", function () {
    return button.testLongPressOnNormalButton(driver);
  });
  it("button_test_press_release", function () {
    return button.testPressRelease(driver);
  });
  it("button_test_tap", function () {
    return button.testTap(driver);
  });
  it("button_test_activate_by_key", function () {
    return button.testActivateByKey(driver);
  });
  it("button_test_click", function () {
    return button.testClick(driver);
  });

  //test combobox
  it("combo_box_test_send_key", function () {
    return combo_box.testSendKey(driver);
  });
  it("bcombo_box_test_ottom_right_and_no_tr", function () {
    return combo_box.testBottomRightAndNoTr(driver);
  });
  it("combo_box_test_combo_box_ex", function () {
    return combo_box.testComboBoxEx(driver);
  });
  it("combo_box_test_bottom", function () {
    return combo_box.testBottom(driver);
  });
  it("combo_box_test_readonly_open", function () {
    return combo_box.testReadonlyOpen(driver);
  });
  it("combo_box_test_editable", function () {
    return combo_box.testEditable(driver);
  });

  //test dialog
  it("dialog_test_confirm", function () {
    return dialogs.testConfirm(driver);
  });
  it("dialog_test_warn", function () {
    return dialogs.testWarn(driver);
  });
  it("dialog_test_info", function () {
    return dialogs.testInfo(driver);
  });
  it("dialog_test_toast", function () {
    return dialogs.testToast(driver);
  });

  //test auto adjust size
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

  //test rotation
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

