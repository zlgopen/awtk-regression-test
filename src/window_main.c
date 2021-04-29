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
#include "window_dialogs.h"
#include "window_rotation.h"
#include "window_auto_adjust_size.h"
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

static ret_t on_open_dialogs(void *ctx, event_t *e) {
  window_dialogs_open();
  return RET_OK;
}

ret_t window_main_open(void) {
  widget_t *win = window_open("main");
  widget_child_on(win, "auto_adjust_size", EVT_CLICK, on_open_auto_adjust_size,
                  win);

  widget_child_on(win, "auto_adjust_size_max_w", EVT_CLICK,
                  on_open_auto_adjust_size_max_w, win);

  widget_child_on(win, "auto_adjust_size_margin", EVT_CLICK,
                  on_open_auto_adjust_size_margin, win);

  widget_child_on(win, "rotation", EVT_CLICK, on_open_rotation, win);
  widget_child_on(win, "dialogs", EVT_CLICK, on_open_dialogs, win);

  return RET_OK;
}
