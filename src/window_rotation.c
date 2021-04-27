/**
 * File:   window_rotation.c
 * Author: AWTK Develop Team
 * Brief:  window_rotation source
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
 * 2021-03-16 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_rotation.h"

static ret_t on_rotation(void *ctx, event_t *e) {
  widget_t *widget = WIDGET(e->target);
  int32_t angle = tk_atoi(widget->name);
  switch (angle) {
  case 90: {
    tk_set_lcd_orientation(LCD_ORIENTATION_90);
    break;
  }
  case 180: {
    tk_set_lcd_orientation(LCD_ORIENTATION_180);
    break;
  }
  case 270: {
    tk_set_lcd_orientation(LCD_ORIENTATION_270);
    break;
  }
  default: {
    tk_set_lcd_orientation(LCD_ORIENTATION_0);
    break;
  }
  }
  return RET_OK;
}

ret_t window_rotation_open(void) {
  widget_t *win = window_open("rotation");
  widget_child_on(win, "0", EVT_CLICK, on_rotation, NULL);
  widget_child_on(win, "90", EVT_CLICK, on_rotation, NULL);
  widget_child_on(win, "180", EVT_CLICK, on_rotation, NULL);
  widget_child_on(win, "270", EVT_CLICK, on_rotation, NULL);

  return RET_OK;
}
