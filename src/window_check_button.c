/**
 * File:   window_check_button.c
 * Author: AWTK Develop Team
 * Brief:  window_check_button source
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
 * 2021-05-06 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_check_button.h"

static ret_t on_check_button_changed(void* ctx, event_t* e) {
  char text[128];
  value_change_event_t* evt = value_change_event_cast(e);
  widget_t* check_button = WIDGET(e->target);
  widget_t* win = widget_get_window(check_button);
  widget_t* value = widget_lookup(win, "value", TRUE);
  widget_t* old_value = widget_lookup(win, "old_value", TRUE);

  if (value != NULL) {
    const char* str = value_bool(&(evt->new_value)) ? "true": "false";
    tk_snprintf(text, sizeof(text), "%s:%s", check_button->name, str); 
    widget_set_text_utf8(value, text);
    log_debug("value:%s\n", text);
  }
  
  if (old_value != NULL) {
    const char* str = value_bool(&(evt->old_value)) ? "true": "false";
    tk_snprintf(text, sizeof(text), "%s:%s", check_button->name, str); 
    widget_set_text_utf8(old_value, text);
    log_debug("old value:%s\n", text);
  }

  return RET_OK;
}

static ret_t on_check_button_will_change_not_all_change(void* ctx, event_t* e) {
  return RET_STOP;
}

ret_t window_check_button_open(void) {
  widget_t *win = window_open("check_button");
  
  widget_child_on(win, "book", EVT_VALUE_CHANGED, on_check_button_changed, win);
  widget_child_on(win, "food", EVT_VALUE_CHANGED, on_check_button_changed, win);
  widget_child_on(win, "pencil", EVT_VALUE_CHANGED, on_check_button_changed, win);
  widget_child_on(win, "font_small", EVT_VALUE_CHANGED, on_check_button_changed, win);
  widget_child_on(win, "font_normal", EVT_VALUE_CHANGED, on_check_button_changed, win);
  widget_child_on(win, "font_big", EVT_VALUE_CHANGED, on_check_button_changed, win);
  
  widget_child_on(win, "disable_change", EVT_VALUE_WILL_CHANGE, on_check_button_will_change_not_all_change, win);

  return RET_OK;
}

