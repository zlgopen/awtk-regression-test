/**
 * File:   window_combo_box.c
 * Author: AWTK Develop Team
 * Brief:  window_combo_box source
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

#include "window_combo_box.h"

static ret_t on_combo_box_changed(void *ctx, event_t *e) {
  widget_t *combo_box = WIDGET(e->target);
  widget_t *win = widget_get_window(combo_box);
  widget_t *value = widget_lookup(win, "value", TRUE);

  if (value != NULL) {
    widget_set_tr_text(value, combo_box_get_text(combo_box));
  }

  return RET_OK;
}

static ret_t on_combo_box_will_change(void *ctx, event_t *e) {
  widget_t *combo_box = WIDGET(e->target);
  widget_t *win = widget_get_window(combo_box);
  widget_t *value = widget_lookup(win, "old_value", TRUE);

  if (value != NULL) {
    widget_set_tr_text(value, combo_box_get_text(combo_box));
  }

  return RET_OK;
}

ret_t window_combo_box_open(void) {
  widget_t *win = window_open("combo_box");

  locale_info_change(locale_info(), "zh", "CN");
  widget_child_on(win, "editable", EVT_VALUE_WILL_CHANGE,
                  on_combo_box_will_change, win);
  widget_child_on(win, "editable", EVT_VALUE_CHANGED, on_combo_box_changed,
                  win);

  widget_child_on(win, "readonly_open_window", EVT_VALUE_WILL_CHANGE,
                  on_combo_box_will_change, win);
  widget_child_on(win, "readonly_open_window", EVT_VALUE_CHANGED,
                  on_combo_box_changed, win);

  widget_child_on(win, "combo_box_ex", EVT_VALUE_WILL_CHANGE,
                  on_combo_box_will_change, win);
  widget_child_on(win, "combo_box_ex", EVT_VALUE_CHANGED, on_combo_box_changed,
                  win);

  widget_child_on(win, "bottom", EVT_VALUE_WILL_CHANGE,
                  on_combo_box_will_change, win);
  widget_child_on(win, "bottom", EVT_VALUE_CHANGED, on_combo_box_changed, win);

  widget_child_on(win, "bottom_right", EVT_VALUE_WILL_CHANGE,
                  on_combo_box_will_change, win);
  widget_child_on(win, "bottom_right", EVT_VALUE_CHANGED, on_combo_box_changed,
                  win);

  return RET_OK;
}
