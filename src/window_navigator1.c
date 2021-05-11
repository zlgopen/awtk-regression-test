/**
 * File:   window_navigator1.c
 * Author: AWTK Develop Team
 * Brief:  window_navigator1 source
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

#include "window_navigator1.h"
#include "window_navigator2.h"

static ret_t on_open_and_close(void *ctx, event_t *e) {
  widget_t *win = widget_get_window(e->target);
  window_navigator2_open(win);
  return RET_OK;
}

static ret_t on_open_and_not_close(void *ctx, event_t *e) {
  window_navigator2_open(NULL);
  return RET_OK;
}

ret_t window_navigator1_open(void) {
  widget_t *win = window_open("navigator1");

  widget_child_on(win, "open_and_close", EVT_CLICK, on_open_and_close, NULL);
  widget_child_on(win, "open_and_not_close", EVT_CLICK, on_open_and_not_close,
                  NULL);

  return RET_OK;
}
