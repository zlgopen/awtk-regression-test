/**
 * File:   window_slide_menu.c
 * Author: AWTK Develop Team
 * Brief:  window_slide_menu source
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
 * 2021-06-08 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_slide_menu.h"

static ret_t on_slide_menu_changed(void* ctx, event_t* e) {
  char text[64];
  widget_t* win = WIDGET(ctx);
  value_change_event_t* evt = (value_change_event_t*)e;

  tk_snprintf(text, sizeof(text)-1, "changed:%d:%d",
    value_int(&(evt->old_value)),
    value_int(&(evt->new_value)));

  widget_set_child_text_utf8(win, "changed", text);

  return RET_OK;
}

static ret_t on_slide_menu_will_change(void* ctx, event_t* e) {
  char text[64];
  widget_t* win = WIDGET(ctx);
  value_change_event_t* evt = (value_change_event_t*)e;

  tk_snprintf(text, sizeof(text)-1, "will:%d:%d",
    value_int(&(evt->old_value)),
    value_int(&(evt->new_value)));

  widget_set_child_text_utf8(win, "will_change", text);

  return RET_OK;
}

ret_t window_slide_menu_open(void) {
  widget_t* win = window_open("slide_menu");

  widget_child_on(win, "slide_menu1", EVT_VALUE_WILL_CHANGE, on_slide_menu_will_change, win);
  widget_child_on(win, "slide_menu1", EVT_VALUE_CHANGED, on_slide_menu_changed, win);
  
  widget_child_on(win, "slide_menu2", EVT_VALUE_WILL_CHANGE, on_slide_menu_will_change, win);
  widget_child_on(win, "slide_menu2", EVT_VALUE_CHANGED, on_slide_menu_changed, win);

  return RET_OK;
}
