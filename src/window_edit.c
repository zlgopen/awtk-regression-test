/**
 * File:   window_edit.c
 * Author: AWTK Develop Team
 * Brief:  window_edit source
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
 * 2021-05-14 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_edit.h"

static ret_t on_edit_change(void* ctx, event_t* e) {
  widget_t* edit = WIDGET(e->target);
  widget_t* win = widget_get_window(edit);
  widget_t* status = widget_lookup(win, (const char*)ctx, TRUE);

  if (status != NULL) {
    widget_set_text(status, edit->text.str);
  }

  return RET_OK;
}

static ret_t on_timer(const timer_info_t* info) {
  dialog_info("info", "phone call...");
  return RET_REMOVE;
}

static ret_t on_dialog_clicked(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_add_timer(win, on_timer, 1200);

  return RET_OK;
}

ret_t window_edit_open(void) {
  widget_t* win = window_open("edit");

  widget_child_on(win, "default", EVT_VALUE_CHANGING, on_edit_change, "changing");
  widget_child_on(win, "default", EVT_VALUE_CHANGED, on_edit_change, "changed");
  widget_child_on(win, "dialog", EVT_CLICK, on_dialog_clicked, win);

  return RET_OK;
}
