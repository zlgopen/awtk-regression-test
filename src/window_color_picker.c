/**
 * File:   window_color_picker.c
 * Author: AWTK Develop Team
 * Brief:  window_color_picker source
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
 * 2021-08-04 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_color_picker.h"

static ret_t on_changed(void* ctx, event_t* e) {
  char text[64];
  widget_t* win = WIDGET(ctx);
  widget_t* status = widget_lookup(win, "status", TRUE);
  value_change_event_t* evt = value_change_event_cast(e);

  tk_snprintf(text, sizeof(text), "%08X=>%08X", value_uint32(&(evt->old_value)), value_uint32(&(evt->new_value)));

  widget_set_text_utf8(status, text); 

  return RET_OK;
}


ret_t window_color_picker_open() {
  widget_t* win = window_open("color_picker");
  widget_child_on(win, "color_picker", EVT_VALUE_CHANGED, on_changed, win);

  return RET_OK;
}
