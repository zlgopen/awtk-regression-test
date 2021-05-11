/**
 * File:   window_navigator2.c
 * Author: AWTK Develop Team
 * Brief:  window_navigator2 source
 *
 * Copyright (c) 2018 - 2021  Guangzhou ZHIYUAN Electronics Co.,Ltd.
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
 * 2021-05-11 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_navigator2.h"

static ret_t on_switch_to(void *ctx, event_t *e) {
  widget_t *wm = window_manager();
  widget_t *win = widget_get_window(WIDGET(e->target));
  widget_t *target = widget_child(wm, "navigator1");

  window_manager_switch_to(wm, win, target, TRUE);

  return RET_OK;
}

static ret_t on_back_to_home(void *ctx, event_t *e) {
  widget_t *wm = window_manager();
  window_manager_back_to_home(wm);

  return RET_OK;
}

ret_t window_navigator2_open(widget_t *to_close) {
  widget_t *win = window_open_and_close("navigator2", to_close);

  widget_child_on(win, "switch_to", EVT_CLICK, on_switch_to, NULL);
  widget_child_on(win, "back_to_home", EVT_CLICK, on_back_to_home, NULL);

  return RET_OK;
}
