"use strict";

let Q = require('q');
let wd = require("wd");
let _ = require('underscore');
require("awtk-appium-js-helpers/setup.js");
let serverConfigs = require('awtk-appium-js-helpers/appium-servers');
let startApp = require("awtk-appium-js-helpers/start-app").startApp;

let gif = require('./gif')
let edit = require('./edit')
let slider = require('./slider')
let mledit = require('./mledit')
let style = require('./style')
let oom = require('./oom')
let locale = require('./locale')
let theme = require('./theme')
let focus = require('./focus')
let popup = require('./popup')
let timer = require('./timer')
let button = require('./button')
let image = require('./image')
let font = require('./font')
let aswitch= require('./switch')
let dialogs = require('./dialogs')
let closable = require('./closable')
let rotation = require('./rotation')
let navigator = require('./navigator')
let combo_box = require('./combo_box')
let fullscreen = require('./fullscreen')
let check_button = require('./check_button')
let multi_dialogs = require('./multi_dialogs')
let text_selector = require('./text_selector')
let auto_adjust_size = require('./auto_adjust_size')
let auto_scale_children = require('./auto_scale_children')
let children_layout= require('./children_layout')
let self_layout= require('./self_layout')
let screen_saver = require('./screen_saver')
let image_animation = require('./image_animation')
let digit_clock = require('./digit_clock')
let time_clock = require('./time_clock')
let rich_text = require('./rich_text')
let progress_bar = require('./progress_bar')
let progress_circle = require('./progress_circle')
let context_menu = require('./context_menu')
let list_view_mobile = require('./list_view_mobile');

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
  //test list_view_mobile
  it("list_view_mobile_test_basic", function () {
    return list_view_mobile.testBasic(driver);
  });
  it("list_view_mobile_test_slide_up", function () {
    return list_view_mobile.testSlideUp(driver);
  });
  it("list_view_mobile_test_slide_down", function () {
    return list_view_mobile.testSlideDown(driver);
  });
  //test context menu
  it("context_menu_test_right_top", function () {
    return context_menu.testRightTop(driver);
  });
  it("context_menu_test_right_middle", function () {
    return context_menu.testRightMiddle(driver);
  });
  it("context_menu_test_right_bottom", function () {
    return context_menu.testRightBottom(driver);
  });
  it("context_menu_test_left_top", function () {
    return context_menu.testLeftTop(driver);
  });
  it("context_menu_test_left_middle", function () {
    return context_menu.testLeftMiddle(driver);
  });
  it("context_menu_test_left_bottom", function () {
    return context_menu.testLeftBottom(driver);
  });
  it("context_menu_test_up_center", function () {
    return context_menu.testUpCenter(driver);
  });
  it("context_menu_test_up_right", function () {
    return context_menu.testUpRight(driver);
  });
  it("context_menu_test_up_left", function () {
    return context_menu.testUpLeft(driver);
  });
  it("context_menu_test_down_center", function () {
    return context_menu.testDownCenter(driver);
  });
  it("context_menu_test_down_right", function () {
    return context_menu.testDownRight(driver);
  });
  it("context_menu_test_down_left", function () {
    return context_menu.testDownLeft(driver);
  });
  //test progress bar
  it("progress_bar_test_basic", function () {
    return progress_bar.testBasic(driver);
  });
  //test progress circle
  it("progress_circle_test_basic", function () {
    return progress_circle.testBasic(driver);
  });

  //test time clock
  it("rich_text_test_basic", function () {
    return rich_text.testBasic(driver);
  });

  //test time clock
  it("time_clock_test_basic", function () {
    return time_clock.testBasic(driver);
  });

  //test digit clock
  it("digit_clock_test_basic", function () {
    return digit_clock.testBasic(driver);
  });

  //test slider
  it("slider_test_v_draw_down", function () {
    return slider.testVDragDown(driver);
  });
  it("slider_test_v_draw_up", function () {
    return slider.testVDragUp(driver);
  });
  it("slider_test_v_click_up", function () {
    return slider.testVClickUp(driver);
  });
  it("slider_test_v_click_down", function () {
    return slider.testVClickDown(driver);
  });
  it("slider_test_v_up_key", function () {
    return slider.testVUpKey(driver);
  });
  it("slider_test_v_down_key", function () {
    return slider.testVDownKey(driver);
  });
  it("slider_test_drag_left", function () {
    return slider.testDragLeft(driver);
  });
  it("slider_test_drag_right", function () {
    return slider.testDragRight(driver);
  });
  it("slider_test_click_right", function () {
    return slider.testClickRight(driver);
  });
  it("slider_test_click_left", function () {
    return slider.testClickLeft(driver);
  });
  it("slider_test_left_key", function () {
    return slider.testLeftKey(driver);
  });
  it("slider_test_right_key", function () {
    return slider.testRightKey(driver);
  });
  //testt text selector 
  it("text_selector_test_up_key_loop", function () {
    return text_selector.testUpKeyLoop(driver);
  });
  it("text_selector_test_down_key_loop", function () {
    return text_selector.testDownKeyLoop(driver);
  });
  it("text_selector_test_click_down_loop", function () {
    return text_selector.testClickDownLoop(driver);
  });
  it("text_selector_test_slide_up_loop", function () {
    return text_selector.testSlideUpLoop(driver);
  });
  it("text_selector_test_slide_down_loop", function () {
    return text_selector.testSlideDownLoop(driver);
  });
  it("text_selector_test_click_up_loop", function () {
    return text_selector.testClickUpLoop(driver);
  });
  //testt text selector 
  it("text_selector_test_slide_up", function () {
    return text_selector.testSlideUp(driver);
  });
  it("text_selector_test_slide_down", function () {
    return text_selector.testSlideDown(driver);
  });
  it("text_selector_test_click_up", function () {
    return text_selector.testClickUp(driver);
  });
  it("text_selector_test_click_down", function () {
    return text_selector.testClickDown(driver);
  });
  it("text_selector_test_up_key", function () {
    return text_selector.testUpKey(driver);
  });
  it("text_selector_test_down_key", function () {
    return text_selector.testDownKey(driver);
  });

  //test mledit
  it("mledit_test_select_down", function () {
    return mledit.testSelectDown(driver);
  });
  it("mledit_test_select_up", function () {
    return mledit.testSelectUp(driver);
  });
  it("mledit_test_default", function () {
    return mledit.testDefault(driver);
  });
  it("mledit_test_select_right", function () {
    return mledit.testSelectRight(driver);
  });
  it("mledit_test_select_left", function () {
    return mledit.testSelectLeft(driver);
  });
  it("mledit_test_undo_redo", function () {
    return mledit.testUndoRedo(driver);
  });
  it("mledit_test_cut_paste", function () {
    return mledit.testCutPaste(driver);
  });
  it("mledit_test_copy_paste", function () {
    return mledit.testCopyPaste(driver);
  });
  it("mledit_test_select_all", function () {
    return mledit.testSelectAll(driver);
  });
  it("mledit_test_left_right_key", function () {
    return mledit.testLeftRightKey(driver);
  });
  it("mledit_test_home_end_key", function () {
    return mledit.testHomeEndKey(driver);
  });
  //test edit
  it("edit_test_select_right", function () {
    return edit.testSelectRight(driver);
  });
  it("edit_test_select_left", function () {
    return edit.testSelectLeft(driver);
  });
  it("edit_test_undo_redo", function () {
    return edit.testUndoRedo(driver);
  });
  it("edit_test_cut_paste", function () {
    return edit.testCutPaste(driver);
  });
  it("edit_test_copy_paste", function () {
    return edit.testCopyPaste(driver);
  });
  it("edit_test_select_all", function () {
    return edit.testSelectAll(driver);
  });
  it("edit_test_left_right_key", function () {
    return edit.testLeftRightKey(driver);
  });
  it("edit_test_home_end_key", function () {
    return edit.testHomeEndKey(driver);
  });
  it("edit_test_auto_fix_int_max", function () {
    return edit.testAutoFixIntMax(driver);
  });
  it("edit_test_auto_fix_int_min", function () {
    return edit.testAutoFixIntMin(driver);
  });
  it("edit_test_time", function () {
    return edit.testTime(driver);
  });
  it("edit_test_time_full", function () {
    return edit.testTimeFull(driver);
  });
  it("edit_test_date", function () {
    return edit.testDate(driver);
  });
  it("edit_test_email", function () {
    return edit.testEmail(driver);
  });
  it("edit_test_password", function () {
    return edit.testPassword(driver);
  });
  it("edit_test_ufloat", function () {
    return edit.testUFloat(driver);
  });
  it("edit_test_float", function () {
    return edit.testFloat(driver);
  });
  it("edit_test_uint", function () {
    return edit.testUInt(driver);
  });
  it("edit_test_int", function () {
    return edit.testInt(driver);
  });
  it("edit_test_ascii", function () {
    return edit.testAscii(driver);
  });
  it("edit_test_default", function () {
    return edit.testDefault(driver);
  });
  //test style
  it("style_test_feedback1", function () {
    return style.testFeedback1(driver);
  });
  it("style_test_feedback2", function () {
    return style.testFeedback2(driver);
  });
  it("style_test_basic", function () {
    return style.testBasic(driver);
  });

  //test oom
  it("oom_test_gui", function () {
    return oom.testGui(driver);
  });
  it("oom_test_none_gui", function () {
    return oom.testNoneGui(driver);
  });

  //test locale
  it("locale_test_chinese", function () {
    return locale.testChinese(driver);
  });
  it("locale_test_english", function () {
    return locale.testEnglish(driver);
  });

  //test theme
  it("theme_test_default_n_times", function () {
    return theme.testDefaultNTimes(driver);
  });
  it("theme_test_default", function () {
    return theme.testDefault(driver);
  });
  it("theme_test_dark", function () {
    return theme.testDark(driver);
  });
  
  //test image_animation
  it("image_animation_test_basic", function () {
    return image_animation.testBasic(driver);
  });

  //test screen_saver
  it("screen_saver_test_basic0", function () {
    return screen_saver.testBasic0(driver);
  });
  it("screen_saver_test_key", function () {
    return screen_saver.testKey(driver);
  });
  it("screen_saver_test_pointer", function () {
    return screen_saver.testPointer(driver);
  });
  it("screen_saver_test_basic", function () {
    return screen_saver.testBasic(driver);
  });

  //test font
  it("font_test_unload", function () {
    return font.testUnload(driver);
  });
  it("font_test_shrink", function () {
    return font.testShrink(driver);
  });
  it("font_test_unload_all", function () {
    return font.testUnloadAll(driver);
  });
  it("font_test_basic", function () {
    return font.testBasic(driver);
  });

  //test gif
  it("gif_test_clickable_space", function () {
    return gif.testClickableSpace(driver);
  });
  it("gif_test_clickable_return", function () {
    return gif.testClickableReturn(driver);
  });
  it("gif_test_clickable", function () {
    return gif.testClickable(driver);
  });
  it("gif_test_pause", function () {
    return gif.testPause(driver);
  });
  it("gif_test_stop", function () {
    return gif.testStop(driver);
  });
  //test image
  it("image_test_clickable_space", function () {
    return image.testClickableSpace(driver);
  });
  it("image_test_clickable_return", function () {
    return image.testClickableReturn(driver);
  });

  it("image_test_unload_all", function () {
    return image.testUnloadAll(driver);
  });
  it("image_test_unload_unused", function () {
    return image.testUnloadUnused(driver);
  });
  it("image_test_other", function () {
    return image.testOther(driver);
  });
  it("image_test_selectable", function () {
    return image.testSelectable(driver);
  });

  //test self layout
  it("self_layout_test_right_bottom", function () {
    return self_layout.testRightBottom(driver);
  });
  it("self_layout_test_right_middle", function () {
    return self_layout.testRightMiddle(driver);
  });
  it("self_layout_test_right_top", function () {
    return self_layout.testRightTop(driver);
  });

  it("self_layout_test_center_bottom", function () {
    return self_layout.testCenterBottom(driver);
  });
  it("self_layout_test_center_middle", function () {
    return self_layout.testCenterMiddle(driver);
  });
  it("self_layout_test_center_top", function () {
    return self_layout.testCenterTop(driver);
  });

  it("self_layout_test_left_bottom", function () {
    return self_layout.testLeftBottom(driver);
  });
  it("self_layout_test_left_middle", function () {
    return self_layout.testLeftMiddle(driver);
  });
  it("self_layout_test_left_top", function () {
    return self_layout.testLeftTop(driver);
  });

  //test children layout
  it("children_layout_test_3x2", function () {
    return children_layout.test3x2(driver);
  });
  it("children_layout_test_3x3", function () {
    return children_layout.test3x3(driver);
  });
  it("children_layout_test_2x3", function () {
    return children_layout.test2x3(driver);
  });
  
  it("children_layout_test_1col", function () {
    return children_layout.test1Col(driver);
  });
 
  it("children_layout_test_1row", function () {
    return children_layout.test1Row(driver);
  });

  it("children_layout_test_basic", function () {
    return children_layout.testBasic(driver);
  });

  //test list view auto adjust size
  it("auto_adjust_size_list_view1", function () {
    return auto_adjust_size.testListView1(driver);
  });
  it("auto_adjust_size_list_view2", function () {
    return auto_adjust_size.testListView2(driver);
  });
  it("auto_adjust_size_list_view3", function () {
    return auto_adjust_size.testListView3(driver);
  });

  //test mutli dialog
  it("multi_dialogs_test_space", function () {
    return multi_dialogs.testSpace(driver);
  });
  
  it("multi_dialogs_test_return", function () {
    return multi_dialogs.testReturn(driver);
  });
  
  it("multi_dialogs_test_back", function () {
    return multi_dialogs.testBack(driver);
  });

  it("multi_dialogs_test_click", function () {
    return multi_dialogs.testClick(driver);
  });

  //test switch
  it("switch_test_slide_left", function () {
    return aswitch.testSlideLeft(driver);
  });
  it("switch_test_return", function () {
    return aswitch.testReturn(driver);
  });
  it("switch_test_space", function () {
    return aswitch.testSpace(driver);
  });
  it("switch_test_click", function () {
    return aswitch.testClick(driver);
  });
  //test focus
  it("focus_test_strongly", function () {
    return focus.testStronglyFocus(driver);
  });
  it("focus_test_strongly_no", function () {
    return focus.testStronglyFocusNo(driver);
  });
  it("focus_test_move_left_right_up_down", function () {
    return focus.testLeftRightUpDown(driver);
  });
  it("focus_test_move_first", function () {
    return focus.testMoveFirst(driver);
  });
  it("focus_test_prev_next", function () {
    return focus.testPrevNext(driver);
  });
  it("focus_test_tab", function () {
    return focus.testTab(driver);
  });
  
  it("focus_test_list_view_up", function () {
    return focus.testListViewUp(driver);
  });
  it("focus_test_list_view_down", function () {
    return focus.testListViewDown(driver);
  });
  it("focus_test_list_view_last", function () {
    return focus.testListViewLast(driver);
  });
  it("focus_test_list_view_first", function () {
    return focus.testListViewFirst(driver);
  });
  it("focus_test_list_view_basic", function () {
    return focus.testListViewBasic(driver);
  });

  //test navigator
  it("navigator_test_back_to_home", function () {
    return navigator.testBackToHome(driver);
  });
  it("navigator_test_back_to_home1", function () {
    return navigator.testBackToHome1(driver);
  });
  it("navigator_test_switch", function () {
    return navigator.testSwitchTo(driver);
  });

  //test fullscreen
  it("fullscreen_test_basic", function () {
    return fullscreen.testBasic(driver);
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
  it("auto_adjust_size_margin", function () {
    return auto_adjust_size.testChineseMargin(driver);
  });
  it("auto_adjust_size_max_w1", function () {
    return auto_adjust_size.testMaxW1(driver);
  });
  it("auto_adjust_size_max_w2", function () {
    return auto_adjust_size.testMaxW2(driver);
  });
  it("auto_adjust_size_max_w3", function () {
    return auto_adjust_size.testMaxW3(driver);
  });
  it("auto_adjust_size_set_text", function () {
    return auto_adjust_size.testSetText(driver);
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
  it("popup_test_close_by_timer_with_user_action", function () {
    return popup.testCloseByTimerWithUserAction(driver);
  });

  it("popup_test_popup_over_popup1", function () {
    return popup.testPopupOverPopup1(driver);
  });
  
  it("popup_test_popup_over_popup2", function () {
    return popup.testPopupOverPopup2(driver);
  });

  it("popup_test_close_by_click_outside2", function () {
    return popup.testCloseByClickOutside2(driver);
  });
  it("popup_test_close_by_click_outside3", function () {
    return popup.testCloseByClickOutside3(driver);
  });
  it("popup_test_close_by_click_outside1", function () {
    return popup.testCloseByClickOutside1(driver);
  });
  it("popup_test_close_by_click", function () {
    return popup.testCloseByClick(driver);
  });
  it("popup_test_close_by_timer1", function () {
    return popup.testCloseByTimer1(driver);
  });
  it("popup_test_close_by_timer2", function () {
    return popup.testCloseByTimer2(driver);
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

