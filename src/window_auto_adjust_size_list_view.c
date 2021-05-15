/**
 * File:   window_auto_adjust_size_list_view.c
 * Author: AWTK Develop Team
 * Brief:  window_auto_adjust_size_list_view source
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
 * 2021-05-15 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_auto_adjust_size_list_view.h"

static ret_t on_set_text(void* ctx, event_t* e) {
  widget_t* win = widget_get_window(WIDGET(e->target));
  widget_set_text_utf8(widget_lookup(win, "l1", TRUE), (const char*)ctx);
  widget_set_text_utf8(widget_lookup(win, "l2", TRUE), (const char*)ctx);
  widget_set_text_utf8(widget_lookup(win, "l3", TRUE), (const char*)ctx);

  return RET_OK;
}

ret_t window_auto_adjust_size_list_view_open(void) {
  widget_t* win = window_open("auto_adjust_size_list_view");
  widget_child_on(win, "short", EVT_CLICK, on_set_text, "it is short");
  widget_child_on(
      win, "long", EVT_CLICK, on_set_text,
      "Specifies whether widget will be treated as the default widget within its toplevel");

  return win != NULL ? RET_OK : RET_FAIL;
}
