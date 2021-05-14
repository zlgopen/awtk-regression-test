/**
 * File:   window_switch.c
 * Author: AWTK Develop Team
 * Brief:  window_switch source
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

#include "window_switch.h"

static ret_t on_switch_changed(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* aswitch = WIDGET(e->target);
  widget_t* value = widget_lookup(win, "value", TRUE);

  if (value != NULL) {
    char str[64];
    tk_snprintf(str, sizeof(str), "%s:%d", aswitch->name, widget_get_value(aswitch));
    widget_set_text_utf8(value, str);
  }

  return RET_OK;
}

static ret_t on_switch_will_change(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* aswitch = WIDGET(e->target);
  widget_t* value = widget_lookup(win, "old_value", TRUE);

  if (value != NULL) {
    char str[64];
    tk_snprintf(str, sizeof(str), "%s:%d", aswitch->name, widget_get_value(aswitch));
    widget_set_text_utf8(value, str);
  }

  return RET_OK;
}

static ret_t on_switch_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* aswitch = WIDGET(e->target);
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (status != NULL) {
    widget_set_text_utf8(status, aswitch->name);
  }

  return RET_OK;
}

ret_t window_switch_open(void) {
  widget_t* win = window_open("switch");

  widget_child_on(win, "s1", EVT_VALUE_WILL_CHANGE, on_switch_will_change, win);
  widget_child_on(win, "s1", EVT_VALUE_CHANGED, on_switch_changed, win);

  widget_child_on(win, "s2", EVT_VALUE_WILL_CHANGE, on_switch_will_change, win);
  widget_child_on(win, "s2", EVT_VALUE_CHANGED, on_switch_changed, win);

  widget_child_on(win, "s3", EVT_VALUE_WILL_CHANGE, on_switch_will_change, win);
  widget_child_on(win, "s3", EVT_VALUE_CHANGED, on_switch_changed, win);

  widget_child_on(win, "s1", EVT_CLICK, on_switch_click, win);
  widget_child_on(win, "s2", EVT_CLICK, on_switch_click, win);
  widget_child_on(win, "s3", EVT_CLICK, on_switch_click, win);

  return RET_OK;
}
