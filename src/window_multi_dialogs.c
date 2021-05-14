/**
 * File:   window_multi_dialogs.c
 * Author: AWTK Develop Team
 * Brief:  window_multi_dialogs source
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

#include "window_multi_dialogs.h"
#include "common.h"

static ret_t show_dialog(int32_t i);

static ret_t on_yes(void* ctx, event_t* e) {
  show_dialog(tk_pointer_to_int(ctx));

  return RET_OK;
}

static ret_t on_no(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  dialog_quit(win, RET_FAIL);

  return RET_OK;
}

static ret_t show_dialog(int32_t i) {
  char text[32];
  widget_t* win = dialog_open("confirm");

  widget_child_on(win, "new", EVT_CLICK, on_yes, tk_pointer_from_int(i + 1));
  widget_child_on(win, "close", EVT_CLICK, on_no, win);

  tk_snprintf(text, sizeof(text), "dialog %d", i);
  widget_set_text_utf8(widget_lookup(win, "status", TRUE), text);

  dialog_modal(win);

  return RET_OK;
}

ret_t window_multi_dialogs_open(void) {
  show_dialog(0);

  return RET_OK;
}
