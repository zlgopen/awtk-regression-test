/**
 * File:   window_timer.c
 * Author: AWTK Develop Team
 * Brief:  window_timer source
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
 * 2021-05-10 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_timer.h"

static ret_t on_timer(const timer_info_t *info) {
  widget_t *win = WIDGET(info->ctx);
  widget_add_value(widget_lookup(win, "status", TRUE), 1);

  return RET_REPEAT;
}

static ret_t on_idle(const idle_info_t *info) {
  widget_t *win = WIDGET(info->ctx);
  widget_add_value(widget_lookup(win, "status", TRUE), 1);

  return RET_REMOVE;
}

static ret_t on_start_timer(void *ctx, event_t *e) {
  widget_t *win = WIDGET(ctx);
  uint32_t id = widget_add_timer(win, on_timer, 500);
  assert(id != TK_INVALID_ID);
  widget_set_prop_int(win, "timer_id", id);

  return RET_OK;
}

static ret_t on_stop_timer(void *ctx, event_t *e) {
  widget_t *win = WIDGET(ctx);
  uint32_t id = widget_get_prop_int(win, "timer_id", TK_INVALID_ID);
  assert(id != TK_INVALID_ID);
  widget_remove_timer(win, id);

  return RET_OK;
}

static ret_t on_start_idle(void *ctx, event_t *e) {
  widget_t *win = WIDGET(ctx);
  widget_add_idle(win, on_idle);

  return RET_OK;
}

ret_t window_timer_open(void) {
  widget_t *win = window_open("timer");

  widget_child_on(win, "start_timer", EVT_CLICK, on_start_timer, win);
  widget_child_on(win, "stop_timer", EVT_CLICK, on_stop_timer, win);
  widget_child_on(win, "start_idle", EVT_CLICK, on_start_idle, win);

  return RET_OK;
}
