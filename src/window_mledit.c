/**
 * File:   window_mledit.c
 * Author: AWTK Develop Team
 * Brief:  window_mledit source
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
 * 2021-06-01 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_mledit.h"

static ret_t on_mledit_change(void* ctx, event_t* e) {
  widget_t* mledit = WIDGET(e->target);
  widget_t* win = widget_get_window(mledit);
  widget_t* status = widget_lookup(win, (const char*)ctx, TRUE);

  if (status != NULL) {
    widget_set_text(status, mledit->text.str);
  }

  return RET_OK;
}

ret_t window_mledit_open(void) {
  widget_t* win = window_open("mledit");

  widget_child_on(win, "default", EVT_VALUE_CHANGING, on_mledit_change, "changing");
  widget_child_on(win, "default", EVT_VALUE_CHANGED, on_mledit_change, "changed");

  return RET_OK;
}
