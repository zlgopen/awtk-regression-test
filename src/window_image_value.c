/**
 * File:   window_image_value.c
 * Author: AWTK Develop Team
 * Brief:  window_image_value source
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
 * 2021-08-06 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_image_value.h"

static ret_t on_inc(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* image_value = widget_lookup(win, "test", TRUE);
  widget_add_value(image_value, 10);

  return RET_OK;
}

static ret_t on_dec(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* image_value = widget_lookup(win, "test", TRUE);
  widget_add_value(image_value, -10);

  return RET_OK;
}


ret_t window_image_value_open(void) {
  widget_t* win = window_open("image_value");

  widget_child_on(win, "inc", EVT_CLICK, on_inc, win);
  widget_child_on(win, "dec", EVT_CLICK, on_dec, win);

  return RET_OK;
}
