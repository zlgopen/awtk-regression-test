/**
 * File:   window_button.c
 * Author: AWTK Develop Team
 * Brief:  window_button source
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
 * 2021-05-07 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_button.h"

static ret_t on_button_event(void* ctx, event_t* e) {
  widget_t* button = WIDGET(e->target);
  widget_t* win = widget_get_window(button);
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (status != NULL) {
    if (BUTTON(button)->repeat > 0) {
      char text[32];
      tk_snprintf(text, sizeof(text) - 1, "%d", BUTTON(button)->repeat_nr);
      widget_set_text_utf8(status, (const char*)text);
    } else {
      widget_set_text_utf8(status, (const char*)ctx);
    }
  }

  return RET_OK;
}

ret_t window_button_open(void) {
  widget_t* win = window_open("button");

  widget_child_on(win, "repeat_button", EVT_CLICK, on_button_event, "click");
  widget_child_on(win, "repeat_button", EVT_LONG_PRESS, on_button_event, "long_press");

  widget_child_on(win, "normal_button", EVT_CLICK, on_button_event, "click");
  widget_child_on(win, "normal_button", EVT_LONG_PRESS, on_button_event, "long_press");

  widget_child_on(win, "long_press", EVT_CLICK, on_button_event, "click");
  widget_child_on(win, "long_press", EVT_LONG_PRESS, on_button_event, "long_press");

  return RET_OK;
}
