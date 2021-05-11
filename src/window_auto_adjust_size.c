/**
 * File:   window_auto_adjust_size.c
 * Author: AWTK Develop Team
 * Brief:  window_auto_adjust_size source
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
 * 2021-03-15 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_auto_adjust_size.h"
#include "common.h"

ret_t window_auto_adjust_size_open(const char *name) {
  widget_t *win = window_open(name);
  hook_locale_switch_events(win);

  return RET_OK;
}
