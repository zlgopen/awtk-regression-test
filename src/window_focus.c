/**
 * File:   window_focus.c
 * Author: AWTK Develop Team
 * Brief:  window_focus source
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
 * 2021-05-12 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_focus.h"

static ret_t on_tab(void* ctx, event_t* e) {
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_PREV_KEY, "shift+tab");
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_NEXT_KEY, "tab");

  return RET_OK;
}

static ret_t on_first(void* ctx, event_t* e) {
  widget_focus_first(WIDGET(ctx));

  return RET_OK;
}

static ret_t on_prev_next(void* ctx, event_t* e) {
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_PREV_KEY, "up");
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_NEXT_KEY, "down");

  return RET_OK;
}

static ret_t on_left_right_up_down(void* ctx, event_t* e) {
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_LEFT_KEY, "left");
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY, "right");
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_UP_KEY, "up");
  widget_set_prop_str(WIDGET(ctx), WIDGET_PROP_MOVE_FOCUS_DOWN_KEY, "down");

  return RET_OK;
}

static ret_t on_dialog(void* ctx, event_t* e) {
  dialog_info("Info", "test focus");

  return RET_OK;
}

static ret_t on_focused(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* target = WIDGET(e->target);
  widget_t* status = widget_lookup(win, "status", TRUE);
  widget_set_text_utf8(status, target->name);

  return RET_OK;
}

static ret_t on_each_widget(void* ctx, const void* data) {
  widget_t* widget = WIDGET(data);

  if (widget->focusable) {
    widget_on(widget, EVT_FOCUS, on_focused, ctx);
  }

  return RET_OK;
}

ret_t window_focus_open(void) {
  widget_t* win = window_open("focus");

  widget_child_on(win, "tab", EVT_CLICK, on_tab, win);
  widget_child_on(win, "first", EVT_CLICK, on_first, win);
  widget_child_on(win, "dialog", EVT_CLICK, on_dialog, win);
  widget_child_on(win, "prev_next", EVT_CLICK, on_prev_next, win);
  widget_child_on(win, "left_right_up_down", EVT_CLICK, on_left_right_up_down, win);
  widget_foreach(win, on_each_widget, win);

  return RET_OK;
}
