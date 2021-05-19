/**
 * File:   window_locale.c
 * Author: AWTK Develop Team
 * Brief:  window_locale source
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
 * 2021-05-19 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "awtk.h"
#include "window_locale.h"

static ret_t on_chinese_click(void* ctx, event_t* e) {
  locale_info_change(locale_info(), "zh", "CN");
  return RET_OK;
}

static ret_t on_english_click(void* ctx, event_t* e) {
  locale_info_change(locale_info(), "en", "US");

  return RET_OK;
}

static ret_t on_locale_changed(void* ctx, event_t* e) {
  char text[32];
  widget_t* win = WIDGET(ctx);
  widget_t* status = widget_lookup(win, "status", TRUE);

  tk_snprintf(text, sizeof(text), "%s_%s", locale_info()->language, locale_info()->country);
  widget_set_text_utf8(status, text);

  return RET_OK;
}

ret_t window_locale_open(void) {
  widget_t* win = window_open("locale");

  widget_child_on(win, "chinese", EVT_CLICK, on_chinese_click, win);
  widget_child_on(win, "english", EVT_CLICK, on_english_click, win);
  widget_on(win, EVT_LOCALE_CHANGED, on_locale_changed, win);
  locale_info_change(locale_info(), "en", "US");

  return RET_OK;
}

