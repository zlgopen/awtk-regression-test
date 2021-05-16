/**
 * File:   window_children_layout.c
 * Author: AWTK Develop Team
 * Brief:  window_children_layout source
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
 * 2021-05-16 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_children_layout.h"

static ret_t on_children_layout_event(void* ctx, event_t* e) {
  const char* param = (const char*)ctx;
  widget_t* children_layout = WIDGET(e->target);
  widget_t* win = widget_get_window(children_layout);
  widget_t* view = widget_lookup(win, "view", TRUE);

  if (view != NULL) {
    widget_set_children_layout(view, param);
    widget_layout(view);
  }

  return RET_OK;
}

ret_t window_children_layout_open(void) {
  widget_t* win = window_open("children_layout");

  widget_child_on(win, "1row", EVT_CLICK, on_children_layout_event, "default(r=1,c=5,xm=2,ym=3,s=4)");
  widget_child_on(win, "1col", EVT_CLICK, on_children_layout_event, "default(r=5,c=1,xm=2,ym=3,s=4)");
  widget_child_on(win, "3x3", EVT_CLICK, on_children_layout_event, "default(r=3,c=3,m=3,s=4)");
  widget_child_on(win, "2x3", EVT_CLICK, on_children_layout_event, "default(r=2,c=3,xm=2,ym=3,s=4)");
  widget_child_on(win, "3x2", EVT_CLICK, on_children_layout_event, "default(r=3,c=2,xm=2,ym=3,s=4)");

  return RET_OK;
}

