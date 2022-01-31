/**
 * File:   window_simple_keyboard.c
 * Author: AWTK Develop Team
 * Brief:  window_simple_keyboard source
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
 * 2021-06-16 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_simple_keyboard.h"


static ret_t on_inc(void* ctx, event_t* e) {
  widget_t* value = widget_lookup(WIDGET(ctx), "value", TRUE);

  widget_add_value_int(value, 1);

  return RET_OK;
}

static ret_t on_dec(void* ctx, event_t* e) {
  widget_t* value = widget_lookup(WIDGET(ctx), "value", TRUE);

  widget_add_value_int(value, -1);

  return RET_OK;
}

static ret_t on_reset(void* ctx, event_t* e) {
  widget_t* value = widget_lookup(WIDGET(ctx), "value", TRUE);
  widget_set_value_int(value, 0);

  return RET_OK;
}

static ret_t on_window_restore_keyboard(void* ctx, event_t* e) {
  system_info_set_keyboard_type(system_info(), KEYBOARD_NORMAL);

  return RET_OK;
}

ret_t window_simple_keyboard_open(void) {
  widget_t* win = window_open("simple_keyboard");
  
  widget_child_on(win, "inc", EVT_CLICK, on_inc, win);
  widget_child_on(win, "dec", EVT_CLICK, on_dec, win);
  widget_child_on(win, "reset", EVT_CLICK, on_reset, win);
  widget_on(win, EVT_DESTROY, on_window_restore_keyboard, win);

  return RET_OK;
}
