/**
 * File:   window_theme.c
 * Author: AWTK Develop Team
 * Brief:  window_theme source
 *
 * Copyright (c) 2019 - 2021  Guangzhou ZHIYUAN Electronics Co.,Ltd.
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
 * 2021-05-19 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "awtk.h"
#include "window_theme.h"

extern ret_t assets_set_global_theme(const char* name);

static ret_t on_default_click(void* ctx, event_t* e) {
  assets_set_global_theme("default");

  return RET_OK;
}

static ret_t on_theme_changed(void* ctx, event_t* e) {
  widget_t* wm = window_manager();
  widget_t* win = widget_child(wm, "theme");
  if (win != NULL) {
    widget_t* status = widget_lookup(win, "status", TRUE);
    assets_manager_t* am = widget_get_assets_manager(win);
    widget_set_text_utf8(status, am->theme);
  }

  return RET_OK;
}

static ret_t on_dark_click(void* ctx, event_t* e) {
  assets_set_global_theme("dark");

  return RET_OK;
}

ret_t window_theme_open(void) {
  widget_t* win = window_open("theme");

  widget_child_on(win, "default", EVT_CLICK, on_default_click, win);
  widget_child_on(win, "dark", EVT_CLICK, on_dark_click, win);
  widget_on(window_manager(), EVT_THEME_CHANGED, on_theme_changed, NULL);

  return RET_OK;
}
