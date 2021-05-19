/**
 * File:   window_screen_saver.c
 * Author: AWTK Develop Team
 * Brief:  window_screen_saver source
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
 * 2021-05-19 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "awtk.h"
#include "window_screen_saver.h"

static ret_t update_status(widget_t* win, const char* text) {
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (status != NULL) {
    widget_set_text_utf8(status, text);
  }

  return RET_OK;
}

static ret_t close_window_on_event(void* ctx, event_t* e) {
  window_close(WIDGET(ctx));

  return RET_REMOVE;
}

static ret_t on_screen_saver(void* ctx, event_t* e) {
  widget_t* win = NULL;
  const char* screen_saver_win = "gif";

  if (widget_child(window_manager(), screen_saver_win) != NULL) {
    log_debug("screen saver exist.\n");
    return RET_OK;
  }

  update_status(WIDGET(ctx), "screen_saver");

  win = window_open(screen_saver_win);
  widget_on(win, EVT_POINTER_MOVE, close_window_on_event, win);
  widget_on(win, EVT_POINTER_UP, close_window_on_event, win);
  widget_on(win, EVT_KEY_UP, close_window_on_event, win);

  return RET_OK;
}

static ret_t on_enable_click(void* ctx, event_t* e) {
  widget_t* wm = window_manager();

  window_manager_set_screen_saver_time(wm, 1000);
  widget_on(wm, EVT_SCREEN_SAVER, on_screen_saver, ctx);

  return RET_OK;
}

static ret_t on_disable_click(void* ctx, event_t* e) {
  widget_t* wm = window_manager();

  window_manager_set_screen_saver_time(wm, 1000 * 1000);
  widget_off_by_ctx(wm, ctx);

  return RET_OK;
}

ret_t window_screen_saver_open(void) {
  widget_t* win = window_open("screen_saver");

  widget_child_on(win, "enable", EVT_CLICK, on_enable_click, win);
  widget_child_on(win, "disable", EVT_CLICK, on_disable_click, win);

  return RET_OK;
}
