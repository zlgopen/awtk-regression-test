"use strict";

let Q = require('q');
let wd = require("wd");
let _ = require('underscore');
require("awtk-appium-js-helpers/setup.js");
let serverConfigs = require('awtk-appium-js-helpers/appium-servers');
let startApp = require("awtk-appium-js-helpers/start-app").startApp;

let popup = require('./popup')
let timer = require('./timer')
let button = require('./button')
let dialogs = require('./dialogs')
let closable = require('./closable')
let rotation = require('./rotation')
let combo_box = require('./combo_box')
let check_button = require('./check_button')
let auto_adjust_size = require('./auto_adjust_size')
let auto_scale_children = require('./auto_scale_children')

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
  
  //test closable
  it("closable_test_confirm", function () {
    return closable.testConfirm(driver);
  });
  it("closable_test_no", function () {
    return closable.testNo(driver);
  });
  it("closable_test_yes", function () {
    return closable.testYes(driver);
  });

  //test timer
  it("timer_test_timer", function () {
    return timer.testTimer(driver);
  });
  it("timer_test_idle", function () {
    return timer.testIdle(driver);
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

  //test auto_scale_children
  it("auto_scale_children_test_scale_wh", function () {
    return auto_scale_children.testScaleWH(driver);
  });
  it("auto_scale_children_test_scale_h", function () {
    return auto_scale_children.testScaleH(driver);
  });
  it("auto_scale_children_test_scale_w", function () {
    return auto_scale_children.testScaleW(driver);
  });
  it("auto_scale_children_test_scale_y", function () {
    return auto_scale_children.testScaleY(driver);
  });
  it("auto_scale_children_test_scale_x", function () {
    return auto_scale_children.testScaleX(driver);
  });
  it("auto_scale_children_test_basic", function () {
    return auto_scale_children.testBasic(driver);
  });
  
  //test popup
  it("popup_test_popup_over_popup1", function () {
    return popup.testPopupOverPopup1(driver);
  });
  
  it("popup_test_popup_over_popup2", function () {
    return popup.testPopupOverPopup2(driver);
  });

  it("popup_test_close_by_click_outside2", function () {
    return popup.testCloseByClickOutside2(driver);
  });
  it("popup_test_close_by_click_outside1", function () {
    return popup.testCloseByClickOutside1(driver);
  });
  it("popup_test_close_by_click", function () {
    return popup.testCloseByClick(driver);
  });
  it("popup_test_close_by_timer", function () {
    return popup.testCloseByTimer(driver);
  });

  //test button
  it("check_button_test_disable_change", function () {
    return check_button.testDisableChange(driver);
  });
  it("check_button_test_radio_basic", function () {
    return check_button.testRadioBasic(driver);
  });
  it("check_button_test_basic", function () {
    return check_button.testBasic(driver);
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

