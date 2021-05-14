/**
 * File:   window_fullscreen.c
 * Author: AWTK Develop Team
 * Brief:  window_fullscreen source
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

#include "window_fullscreen.h"

static ret_t on_fullscreen(void* ctx, event_t* e) {
  widget_t* widget = WIDGET(e->target);
  widget_t* win = widget_get_window(widget);

  if (ctx == NULL) {
    window_set_fullscreen(win, FALSE);
  } else {
    window_set_fullscreen(win, TRUE);
  }

  return RET_OK;
}

static ret_t on_fullscreen_done(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (win->y == 0) {
    widget_set_text_utf8(status, "fullscreen");
  } else {
    widget_set_text_utf8(status, "unfullscreen");
  }

  return RET_OK;
}

ret_t window_fullscreen_open(void) {
  widget_t* win = window_open("fullscreen");

  widget_child_on(win, "fullscreen", EVT_CLICK, on_fullscreen, win);
  widget_child_on(win, "unfullscreen", EVT_CLICK, on_fullscreen, NULL);
  widget_on(win, EVT_MOVE_RESIZE, on_fullscreen_done, win);

  return RET_OK;
}
