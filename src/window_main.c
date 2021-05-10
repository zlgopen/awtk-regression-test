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
#include "window_popup.h"
#include "window_timer.h"
#include "window_button.h"
#include "window_dialogs.h"
#include "window_rotation.h"
#include "window_combo_box.h"
#include "window_check_button.h"
#include "window_auto_adjust_size.h"
#include "window_auto_scale_children.h"
#include "window_auto_adjust_size_max_w.h"

static ret_t on_open_auto_adjust_size(void *ctx, event_t *e) {
  window_auto_adjust_size_open("auto_adjust_size");
  return RET_OK;
}

static ret_t on_open_auto_adjust_size_margin(void *ctx, event_t *e) {
  window_auto_adjust_size_open("auto_adjust_size_margin");
  return RET_OK;
}

static ret_t on_open_auto_adjust_size_max_w(void *ctx, event_t *e) {
  window_auto_adjust_size_max_w_open();
  return RET_OK;
}

static ret_t on_open_rotation(void *ctx, event_t *e) {
  window_rotation_open();
  return RET_OK;
}

static ret_t on_open_combo_box(void *ctx, event_t *e) {
  window_combo_box_open();
  return RET_OK;
}

static ret_t on_open_check_button(void *ctx, event_t *e) {
  window_check_button_open();
  return RET_OK;
}

static ret_t on_open_dialogs(void *ctx, event_t *e) {
  window_dialogs_open();
  return RET_OK;
}

static ret_t on_open_button(void *ctx, event_t *e) {
  window_button_open();
  return RET_OK;
}

static ret_t on_open_timer(void *ctx, event_t *e) {
  window_timer_open();
  return RET_OK;
}

static ret_t on_open_auto_scale_children(void *ctx, event_t *e) {
  window_auto_scale_children_open();
  return RET_OK;
}

static ret_t on_open_popup(void *ctx, event_t *e) {
  window_popup_open();
  return RET_OK;
}

ret_t window_main_open(void) {
  widget_t *win = window_open("system_bar");

  win = window_open("main");
  widget_child_on(win, "auto_adjust_size", EVT_CLICK, on_open_auto_adjust_size,
                  win);

  widget_child_on(win, "auto_adjust_size_max_w", EVT_CLICK,
                  on_open_auto_adjust_size_max_w, win);

  widget_child_on(win, "auto_adjust_size_margin", EVT_CLICK,
                  on_open_auto_adjust_size_margin, win);

  widget_child_on(win, "rotation", EVT_CLICK, on_open_rotation, win);
  widget_child_on(win, "combo_box", EVT_CLICK, on_open_combo_box, win);
  widget_child_on(win, "check_button", EVT_CLICK, on_open_check_button, win);
  widget_child_on(win, "dialogs", EVT_CLICK, on_open_dialogs, win);
  widget_child_on(win, "button", EVT_CLICK, on_open_button, win);
  widget_child_on(win, "timer", EVT_CLICK, on_open_timer, win);
  widget_child_on(win, "popup", EVT_CLICK, on_open_popup, win);
  widget_child_on(win, "auto_scale_children", EVT_CLICK, on_open_auto_scale_children, win);

  return RET_OK;
}

