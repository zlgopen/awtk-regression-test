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

static ret_t on_change_to_english(void *ctx, event_t *e) {
  locale_info_change(locale_info(), "en", "US");
  return RET_OK;
}

static ret_t on_change_to_chinese(void *ctx, event_t *e) {
  locale_info_change(locale_info(), "zh", "CN");
  return RET_OK;
}

ret_t window_auto_adjust_size_open(const char* name) {
  widget_t *win = window_open(name);
  widget_child_on(win, "english", EVT_CLICK, on_change_to_english, NULL);
  widget_child_on(win, "chinese", EVT_CLICK, on_change_to_chinese, NULL);

  return RET_OK;
}
