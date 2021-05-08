/**
 * File:   window_popup.c
 * Author: AWTK Develop Team
 * Brief:  window_popup source
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
 * 2021-05-08 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_popup.h"

static ret_t on_enable_close_by_timer(void* ctx, event_t* e) {
  popup_set_close_when_timeout(WIDGET(ctx), 500);
  return RET_OK;
}

static ret_t on_enable_close_by_click(void* ctx, event_t* e) {
  popup_set_close_when_click(WIDGET(ctx), TRUE);
  return RET_OK;
}

static ret_t on_enable_close_by_click_outside(void* ctx, event_t* e) {
  popup_set_close_when_click_outside(WIDGET(ctx), TRUE);
  return RET_OK;
}

static ret_t on_window_close(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_set_text_utf8(widget_lookup(win, "status1", TRUE), "close");

  return RET_OK;
}

static ret_t on_open_popup2(void* ctx, event_t* e) {
  widget_t* popup1 = WIDGET(ctx);
  widget_t* win = window_open("popup2");
  widget_on(win, EVT_WINDOW_CLOSE, on_window_close, popup1);

  return RET_OK;
}

static ret_t on_open_popup3(void* ctx, event_t* e) {
  widget_t* popup1 = WIDGET(ctx);
  widget_t* win = window_open("popup3");
  widget_on(win, EVT_WINDOW_CLOSE, on_window_close, popup1);

  return RET_OK;
}

static ret_t on_window_will_open(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);

  widget_set_text_utf8(widget_lookup(win, "status1", TRUE), "will_open");

  return RET_OK;
}

static ret_t on_window_open(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);

  widget_set_text_utf8(widget_lookup(win, "status2", TRUE), "open");

  return RET_OK;
}

static ret_t on_window_to_background(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);

  widget_set_text_utf8(widget_lookup(win, "status2", TRUE), "background");

  return RET_OK;
}

static ret_t on_window_to_foreground(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);

  widget_set_text_utf8(widget_lookup(win, "status3", TRUE), "foreground");

  return RET_OK;
}

ret_t window_popup_open(void) {
  widget_t *win = window_open("popup1");

  widget_on(win, EVT_WINDOW_WILL_OPEN, on_window_will_open, win);
  widget_on(win, EVT_WINDOW_OPEN, on_window_open, win);
  widget_on(win, EVT_WINDOW_TO_BACKGROUND, on_window_to_background, win);
  widget_on(win, EVT_WINDOW_TO_FOREGROUND, on_window_to_foreground, win);

  widget_child_on(win, "open_popup2", EVT_CLICK, on_open_popup2, win);
  widget_child_on(win, "open_popup3", EVT_CLICK, on_open_popup3, win);
  widget_child_on(win, "enable_close_by_timer", EVT_CLICK, on_enable_close_by_timer, win);
  widget_child_on(win, "enable_close_by_click", EVT_CLICK, on_enable_close_by_click, win);
  widget_child_on(win, "enable_close_by_click_outside", EVT_CLICK, on_enable_close_by_click_outside, win);

  return RET_OK;
}

