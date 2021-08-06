/**
 * File:   window_main.c
 * Author: AWTK Develop Team
 * Brief:  window_main source
 *
 * Copyright (c) 2018 - 2018  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * License file for more details.
 *
 */

/**
 * History:
 * ================================================================
 * 2021-03-15 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_main.h"
#include "window_pages.h"
#include "window_image_value.h"
#include "window_gauge.h"
#include "window_color_picker.h"
#include "window_timer.h"
#include "window_switch.h"
#include "window_button.h"
#include "window_image.h"
#include "window_font.h"
#include "window_gif.h"
#include "window_style.h"
#include "window_oom.h"
#include "window_locale.h"
#include "window_theme.h"
#include "window_image_animation.h"
#include "window_screen_saver.h"
#include "window_check_button.h"
#include "window_closable.h"
#include "window_edit.h"
#include "window_text_selector.h"
#include "window_slider.h"
#include "window_mledit.h"
#include "window_focus.h"
#include "window_combo_box.h"
#include "window_vpage.h"
#include "window_slide_view.h"
#include "window_slide_menu.h"
#include "window_dialogs.h"
#include "window_fullscreen.h"
#include "window_navigator1.h"
#include "window_popup.h"
#include "window_rotation.h"
#include "window_focus_list_view.h"
#include "window_multi_dialogs.h"
#include "window_auto_adjust_size.h"
#include "window_auto_adjust_size_max_w.h"
#include "window_auto_scale_children.h"
#include "window_auto_adjust_size_list_view.h"
#include "window_children_layout.h"
#include "window_self_layout.h"
#include "window_clip.h"
#include "window_simple_keyboard.h"

static ret_t on_open_auto_adjust_size(void* ctx, event_t* e) {
  window_auto_adjust_size_open("auto_adjust_size");
  return RET_OK;
}

static ret_t on_open_auto_adjust_size_margin(void* ctx, event_t* e) {
  window_auto_adjust_size_open("auto_adjust_size_margin");
  return RET_OK;
}

static ret_t on_open_auto_adjust_size_max_w(void* ctx, event_t* e) {
  window_auto_adjust_size_max_w_open();
  return RET_OK;
}

static ret_t on_open_auto_adjust_size_list_view(void* ctx, event_t* e) {
  window_auto_adjust_size_list_view_open();
  return RET_OK;
}

static ret_t on_open_rotation(void* ctx, event_t* e) {
  window_rotation_open();
  return RET_OK;
}

static ret_t on_open_combo_box(void* ctx, event_t* e) {
  window_combo_box_open();
  return RET_OK;
}

static ret_t on_open_clip(void* ctx, event_t* e) {
  window_clip_open("clip_view");
  return RET_OK;
}

static ret_t on_open_pages_clip(void* ctx, event_t* e) {
  window_clip_open("pages_clip");
  return RET_OK;
}


static ret_t on_open_3keys(void* ctx, event_t* e) {
  system_info_set_keyboard_type(system_info(), KEYBOARD_3KEYS);
  window_simple_keyboard_open();

  return RET_OK;
}

static ret_t on_open_5keys(void* ctx, event_t* e) {
  system_info_set_keyboard_type(system_info(), KEYBOARD_5KEYS);
  window_simple_keyboard_open();

  return RET_OK;
}

static ret_t on_open_slide_view_h(void* ctx, event_t* e) {
  window_slide_view_open("slide_view_h");
  return RET_OK;
}

static ret_t on_open_slide_view_v(void* ctx, event_t* e) {
  window_slide_view_open("slide_view_v");
  return RET_OK;
}

static ret_t on_open_vpage_htrans(void* ctx, event_t* e) {
  window_vpage_open("vpage_htrans");
  return RET_OK;
}

static ret_t on_open_pages(void* ctx, event_t* e) {
  window_pages_open();
  return RET_OK;
}

static ret_t on_open_image_value(void* ctx, event_t* e) {
  window_image_value_open();
  return RET_OK;
}

static ret_t on_open_gauge(void* ctx, event_t* e) {
  window_gauge_open();
  return RET_OK;
}

static ret_t on_open_color_picker(void* ctx, event_t* e) {
  window_color_picker_open();
  return RET_OK;
}

static ret_t on_open_vpage_vtrans(void* ctx, event_t* e) {
  window_vpage_open("vpage_vtrans");
  return RET_OK;
}

static ret_t on_open_vpage_none(void* ctx, event_t* e) {
  window_vpage_open("vpage_none");
  return RET_OK;
}

static ret_t on_open_slide_menu(void* ctx, event_t* e) {
  window_slide_menu_open();
  return RET_OK;
}

static ret_t on_open_check_button(void* ctx, event_t* e) {
  window_check_button_open();
  return RET_OK;
}

static ret_t on_open_dialogs(void* ctx, event_t* e) {
  window_dialogs_open();
  return RET_OK;
}

static ret_t on_open_button(void* ctx, event_t* e) {
  window_button_open();
  return RET_OK;
}

static ret_t on_open_image(void* ctx, event_t* e) {
  window_image_open();
  return RET_OK;
}

static ret_t on_open_font(void* ctx, event_t* e) {
  window_font_open();
  return RET_OK;
}

static ret_t on_open_gif(void* ctx, event_t* e) {
  window_gif_open();
  return RET_OK;
}

static ret_t on_open_style(void* ctx, event_t* e) {
  window_style_open();
  return RET_OK;
}

static ret_t on_open_oom(void* ctx, event_t* e) {
  window_oom_open();
  return RET_OK;
}

static ret_t on_open_locale(void* ctx, event_t* e) {
  window_locale_open();
  return RET_OK;
}

static ret_t on_open_theme(void* ctx, event_t* e) {
  window_theme_open();
  return RET_OK;
}

static ret_t on_open_image_animation(void* ctx, event_t* e) {
  window_image_animation_open();
  return RET_OK;
}

static ret_t on_open_screen_saver(void* ctx, event_t* e) {
  window_screen_saver_open();
  return RET_OK;
}

static ret_t on_open_children_layout(void* ctx, event_t* e) {
  window_children_layout_open();
  return RET_OK;
}

static ret_t on_open_self_layout(void* ctx, event_t* e) {
  window_self_layout_open();
  return RET_OK;
}

static ret_t on_open_switch(void* ctx, event_t* e) {
  window_switch_open();
  return RET_OK;
}

static ret_t on_open_closable(void* ctx, event_t* e) {
  window_closable_open();
  return RET_OK;
}

static ret_t on_open_edit(void* ctx, event_t* e) {
  window_edit_open();
  return RET_OK;
}

static ret_t on_open_text_selector(void* ctx, event_t* e) {
  window_text_selector_open();
  return RET_OK;
}

static ret_t on_open_slider(void* ctx, event_t* e) {
  window_slider_open();
  return RET_OK;
}

static ret_t on_open_mledit(void* ctx, event_t* e) {
  window_mledit_open();
  return RET_OK;
}

static ret_t on_open_focus(void* ctx, event_t* e) {
  window_focus_open();
  return RET_OK;
}

static ret_t on_open_focus_list_view(void* ctx, event_t* e) {
  window_focus_list_view_open();
  return RET_OK;
}

static ret_t on_open_fullscreen(void* ctx, event_t* e) {
  window_fullscreen_open();
  return RET_OK;
}

static ret_t on_open_navigator1(void* ctx, event_t* e) {
  window_navigator1_open();
  return RET_OK;
}

static ret_t on_open_timer(void* ctx, event_t* e) {
  window_timer_open();
  return RET_OK;
}

static ret_t on_open_auto_scale_children(void* ctx, event_t* e) {
  window_auto_scale_children_open();
  return RET_OK;
}

static ret_t on_open_popup(void* ctx, event_t* e) {
  window_popup_open();
  return RET_OK;
}

static ret_t on_open_multi_dialogs(void* ctx, event_t* e) {
  window_multi_dialogs_open();
  return RET_OK;
}

ret_t window_main_open(void) {
  widget_t* win = window_open("system_bar");

  win = window_open("main");
  widget_child_on(win, "color_picker", EVT_CLICK, on_open_color_picker, win);
  widget_child_on(win, "pages", EVT_CLICK, on_open_pages, win);
  widget_child_on(win, "image_value", EVT_CLICK, on_open_image_value, win);
  widget_child_on(win, "auto_adjust_size", EVT_CLICK, on_open_auto_adjust_size, win);

  widget_child_on(win, "auto_adjust_size_max_w", EVT_CLICK, on_open_auto_adjust_size_max_w, win);
  widget_child_on(win, "auto_adjust_size_list_view", EVT_CLICK, on_open_auto_adjust_size_list_view,
                  win);

  widget_child_on(win, "auto_adjust_size_margin", EVT_CLICK, on_open_auto_adjust_size_margin, win);

  widget_child_on(win, "clip_view", EVT_CLICK, on_open_clip, win);
  widget_child_on(win, "rotation", EVT_CLICK, on_open_rotation, win);
  widget_child_on(win, "combo_box", EVT_CLICK, on_open_combo_box, win);
  widget_child_on(win, "slide_view_h", EVT_CLICK, on_open_slide_view_h, win);
  widget_child_on(win, "slide_view_v", EVT_CLICK, on_open_slide_view_v, win);
  widget_child_on(win, "vpage_htrans", EVT_CLICK, on_open_vpage_htrans, win);
  widget_child_on(win, "vpage_vtrans", EVT_CLICK, on_open_vpage_vtrans, win);
  widget_child_on(win, "vpage_none", EVT_CLICK, on_open_vpage_none, win);
  widget_child_on(win, "slide_menu", EVT_CLICK, on_open_slide_menu, win);
  widget_child_on(win, "check_button", EVT_CLICK, on_open_check_button, win);
  widget_child_on(win, "dialogs", EVT_CLICK, on_open_dialogs, win);
  widget_child_on(win, "button", EVT_CLICK, on_open_button, win);
  widget_child_on(win, "image", EVT_CLICK, on_open_image, win);
  widget_child_on(win, "font", EVT_CLICK, on_open_font, win);
  widget_child_on(win, "gif", EVT_CLICK, on_open_gif, win);
  widget_child_on(win, "style", EVT_CLICK, on_open_style, win);
  widget_child_on(win, "oom", EVT_CLICK, on_open_oom, win);
  widget_child_on(win, "locale", EVT_CLICK, on_open_locale, win);
  widget_child_on(win, "theme", EVT_CLICK, on_open_theme, win);
  widget_child_on(win, "image_animation", EVT_CLICK, on_open_image_animation, win);
  widget_child_on(win, "screen_saver", EVT_CLICK, on_open_screen_saver, win);
  widget_child_on(win, "children_layout", EVT_CLICK, on_open_children_layout, win);
  widget_child_on(win, "self_layout", EVT_CLICK, on_open_self_layout, win);
  widget_child_on(win, "switch", EVT_CLICK, on_open_switch, win);
  widget_child_on(win, "closable", EVT_CLICK, on_open_closable, win);
  widget_child_on(win, "edit", EVT_CLICK, on_open_edit, win);
  widget_child_on(win, "text_selector", EVT_CLICK, on_open_text_selector, win);
  widget_child_on(win, "slider", EVT_CLICK, on_open_slider, win);
  widget_child_on(win, "mledit", EVT_CLICK, on_open_mledit, win);
  widget_child_on(win, "focus", EVT_CLICK, on_open_focus, win);
  widget_child_on(win, "fullscreen", EVT_CLICK, on_open_fullscreen, win);
  widget_child_on(win, "navigator1", EVT_CLICK, on_open_navigator1, win);
  widget_child_on(win, "timer", EVT_CLICK, on_open_timer, win);
  widget_child_on(win, "popup", EVT_CLICK, on_open_popup, win);
  widget_child_on(win, "auto_scale_children", EVT_CLICK, on_open_auto_scale_children, win);
  widget_child_on(win, "multi_dialogs", EVT_CLICK, on_open_multi_dialogs, win);
  widget_child_on(win, "focus_list_view", EVT_CLICK, on_open_focus_list_view, win);
  widget_child_on(win, "pages_clip", EVT_CLICK, on_open_pages_clip, win);
  widget_child_on(win, "3keys", EVT_CLICK, on_open_3keys, win);
  widget_child_on(win, "5keys", EVT_CLICK, on_open_5keys, win);
  widget_child_on(win, "gauge", EVT_CLICK, on_open_gauge, win);

  return RET_OK;
}
