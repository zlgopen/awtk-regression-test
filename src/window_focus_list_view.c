/**
 * File:   window_focus_list_view.c
 * Author: AWTK Develop Team
 * Brief:  window_focus_list_view source
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

#include "window_focus_list_view.h"

static ret_t on_focus_xx(void* ctx, event_t* e) {
  widget_t* win = widget_get_window(WIDGET(e->target));
  widget_t* widget = widget_lookup(win, (const char*)(ctx), TRUE);

  widget_set_focused(widget, TRUE);

  return RET_OK;
}

static ret_t on_focus_list_viewed(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* target = WIDGET(e->target);
  widget_t* status = widget_lookup(win, "status", TRUE);
  widget_set_text_utf8(status, target->name);

  assert(widget_get_focused_widget(target) == target);

  return RET_OK;
}

static ret_t on_each_widget(void* ctx, const void* data) {
  widget_t* widget = WIDGET(data);

  if (widget->focusable) {
    widget_on(widget, EVT_FOCUS, on_focus_list_viewed, ctx);
  }

  return RET_OK;
}

ret_t window_focus_list_view_open(void) {
  widget_t* win = window_open("focus_list_view");
  widget_t* widget = widget_lookup(win, "l9", TRUE);

  widget_child_on(win, "first", EVT_CLICK, on_focus_xx, "l1");
  widget_child_on(win, "last", EVT_CLICK, on_focus_xx, "l12");
  widget_foreach(win, on_each_widget, win);

  widget_set_focused(widget, TRUE);

  return RET_OK;
}
