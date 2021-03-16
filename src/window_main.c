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
#include "window_auto_adjust_size.h"

static ret_t on_open_auto_adjust_size(void *ctx, event_t *e) {
  window_auto_adjust_size_open();
  return RET_OK;
}

ret_t window_main_open(void) {
  widget_t *win = window_open("main");

  widget_child_on(win, "auto_adjust_size", EVT_CLICK, on_open_auto_adjust_size,
                  win);

  return RET_OK;
}