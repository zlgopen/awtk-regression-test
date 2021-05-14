/**
 * File:   window_auto_scale_children.c
 * Author: AWTK Develop Team
 * Brief:  window_auto_scale_children source
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

#include "window_auto_scale_children.h"

static ret_t on_apply(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  bool_t x = CHECK_BUTTON(widget_lookup(win, "x", TRUE))->value;
  bool_t y = CHECK_BUTTON(widget_lookup(win, "y", TRUE))->value;
  bool_t w = CHECK_BUTTON(widget_lookup(win, "w", TRUE))->value;
  bool_t h = CHECK_BUTTON(widget_lookup(win, "h", TRUE))->value;

  widget_set_prop_bool(win, WIDGET_PROP_AUTO_SCALE_CHILDREN_X, x);
  widget_set_prop_bool(win, WIDGET_PROP_AUTO_SCALE_CHILDREN_Y, y);
  widget_set_prop_bool(win, WIDGET_PROP_AUTO_SCALE_CHILDREN_W, w);
  widget_set_prop_bool(win, WIDGET_PROP_AUTO_SCALE_CHILDREN_H, h);

  window_base_auto_scale_children(win);

  return RET_OK;
}

ret_t window_auto_scale_children_open(void) {
  widget_t* win = window_open("auto_scale_children");

  widget_child_on(win, "apply", EVT_CLICK, on_apply, win);

  return RET_OK;
}
