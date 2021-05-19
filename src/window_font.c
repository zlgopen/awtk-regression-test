/**
 * File:   window_font.c
 * Author: AWTK Develop Team
 * Brief:  window_font source
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
 * 2021-05-18 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_font.h"
#include "base/font_manager.h"

static ret_t on_unload_all(void* ctx, event_t* e) {
  assert(font_manager_get_font(font_manager(), "light", 20) != NULL);
  assert(font_manager_lookup(font_manager(), "light", 20) != NULL);

  font_manager_unload_all(font_manager());
  assert(font_manager_lookup(font_manager(), "light", 20) == NULL);

  return RET_OK;
}

static ret_t on_shrink(void* ctx, event_t* e) {
  font_manager_shrink_cache(font_manager(), 10);

  return RET_OK;
}

static ret_t on_unload(void* ctx, event_t* e) {
  assert(font_manager_get_font(font_manager(), "light", 20) != NULL);
  assert(font_manager_lookup(font_manager(), "light", 20) != NULL);

  font_manager_unload_font(font_manager(), "light", 0);
  assert(font_manager_lookup(font_manager(), "light", 20) == NULL);

  return RET_OK;
}

ret_t window_font_open(void) {
  widget_t* win = window_open("font");

  widget_child_on(win, "unload", EVT_CLICK, on_unload, win);
  widget_child_on(win, "unload_all", EVT_CLICK, on_unload_all, win);
  widget_child_on(win, "shrink", EVT_CLICK, on_shrink, win);

  return RET_OK;
}
