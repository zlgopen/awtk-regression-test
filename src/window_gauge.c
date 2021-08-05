/**
 * File:   window_gauge.c
 * Author: AWTK Develop Team
 * Brief:  window_gauge source
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
 * 2021-08-05 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_gauge.h"

static ret_t on_inc(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_add_value(widget_lookup(win, "p1", TRUE), 10);
  widget_add_value(widget_lookup(win, "p2", TRUE), 10);
  widget_add_value(widget_lookup(win, "p3", TRUE), 10);

  return RET_OK;
}

static ret_t on_dec(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_add_value(widget_lookup(win, "p1", TRUE), -10);
  widget_add_value(widget_lookup(win, "p2", TRUE), -10);
  widget_add_value(widget_lookup(win, "p3", TRUE), -10);

  return RET_OK;
}

static ret_t on_reset(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_set_value(widget_lookup(win, "p1", TRUE), 0);
  widget_set_value(widget_lookup(win, "p2", TRUE), 0);
  widget_set_value(widget_lookup(win, "p3", TRUE), 0);

  return RET_OK;
}


ret_t window_gauge_open(void) {
  widget_t* win = window_open("gauge");

  widget_child_on(win, "inc", EVT_CLICK, on_inc, win);
  widget_child_on(win, "0", EVT_CLICK, on_reset, win);
  widget_child_on(win, "dec", EVT_CLICK, on_dec, win);

  return RET_OK;
}
