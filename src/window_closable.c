/**
 * File:   window_closable.c
 * Author: AWTK Develop Team
 * Brief:  window_closable source
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

#include "window_closable.h"

static ret_t on_closable_event(void *ctx, event_t *e) {
  widget_t *widget = WIDGET(e->target);
  widget_t *win = widget_get_window(widget);

  widget_set_prop_str(win, WIDGET_PROP_CLOSABLE, widget->name);
  log_debug("set closable to %s\n", widget->name);

  return RET_OK;
}

static ret_t on_request_close(void *ctx, event_t *e) {
  widget_t *win = WIDGET(ctx);
  if (dialog_confirm("Confirm", "Are you sure to close?") == RET_OK) {
    widget_close_window(win);
  } else {
    log_debug("User cancel to close");
  }

  return RET_OK;
}

ret_t window_closable_open(void) {
  widget_t *win = window_open("closable");

  widget_child_on(win, "yes", EVT_CLICK, on_closable_event, NULL);
  widget_child_on(win, "no", EVT_CLICK, on_closable_event, NULL);
  widget_child_on(win, "confirm", EVT_CLICK, on_closable_event, NULL);
  widget_on(win, EVT_REQUEST_CLOSE_WINDOW, on_request_close, win);

  return RET_OK;
}
