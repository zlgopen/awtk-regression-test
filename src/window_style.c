/**
 * File:   window_style.c
 * Author: AWTK Develop Team
 * Brief:  window_style source
 *
 * Copyright (c) 2025 - 2021  Guangzhou ZHIYUAN Electronics Co.,Ltd.
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
 * 2021-05-25 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "awtk.h"
#include "window_style.h"

static ret_t on_feedback(void* ctx, widget_t* widget, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  widget_t* status = widget_lookup(win, "status", TRUE);
  widget_set_text_utf8(status, widget->name);

  return RET_OK;
}

static ret_t on_destroy(void* ctx, event_t* e) {
  ui_feedback_deinit();

  return RET_OK;
}

ret_t window_style_open(void) {
  widget_t* win = window_open("style");
  ui_feedback_init(on_feedback, win);

  return RET_OK;
}
