/**
 * File:   window_slider.c
 * Author: AWTK Develop Team
 * Brief:  window_slider source
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
 * 2021-06-02 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_slider.h"

static ret_t on_slider_change(void* ctx, event_t* e) {
  char str[128];
  widget_t* slider = WIDGET(e->target);
  widget_t* win = widget_get_window(slider);
  widget_t* status = widget_lookup(win, (const char*)ctx, TRUE);

  if (status != NULL) {
    value_change_event_t* evt = (value_change_event_t*)e;
    tk_snprintf(str, sizeof(str) - 1, "%s:%d:%d", slider->name, value_int(&(evt->old_value)),
                value_int(&(evt->new_value)));
    widget_set_text_utf8(status, str);
  }

  return RET_OK;
}

ret_t window_slider_open(void) {
  widget_t* win = window_open("slider");

  widget_child_on(win, "h1", EVT_VALUE_CHANGING, on_slider_change, "changing");
  widget_child_on(win, "h1", EVT_VALUE_WILL_CHANGE, on_slider_change, "will_change");
  widget_child_on(win, "h1", EVT_VALUE_CHANGED, on_slider_change, "changed");
  
  widget_child_on(win, "h2", EVT_VALUE_CHANGING, on_slider_change, "changing");
  widget_child_on(win, "h2", EVT_VALUE_WILL_CHANGE, on_slider_change, "will_change");
  widget_child_on(win, "h2", EVT_VALUE_CHANGED, on_slider_change, "changed");

  widget_child_on(win, "v1", EVT_VALUE_CHANGING, on_slider_change, "changing");
  widget_child_on(win, "v1", EVT_VALUE_WILL_CHANGE, on_slider_change, "will_change");
  widget_child_on(win, "v1", EVT_VALUE_CHANGED, on_slider_change, "changed");

  return RET_OK;
}
