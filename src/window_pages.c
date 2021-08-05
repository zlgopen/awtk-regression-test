/**
 * File:   window_pages.c
 * Author: AWTK Develop Team
 * Brief:  window_pages source
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
 * 2021-08-03 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_pages.h"

static ret_t on_remove(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* widget = WIDGET(e->target);
  widget_t* view = widget->parent;
  widget_t* pages = widget_lookup(win, "pages", TRUE);
  widget_destroy(view);

  widget_set_child_text_with_int(win, "status", "%d", widget_count_children(pages));

  return RET_OK;
}


ret_t window_pages_open(void) {
  widget_t* win = window_open("pages");

  widget_child_on(win, "remove1", EVT_CLICK, on_remove, win);
  widget_child_on(win, "remove2", EVT_CLICK, on_remove, win);
  widget_child_on(win, "remove3", EVT_CLICK, on_remove, win);
  widget_child_on(win, "remove4", EVT_CLICK, on_remove, win);

  return RET_OK;
}
