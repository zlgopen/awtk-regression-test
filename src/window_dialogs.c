/**
 * File:   window_dialogs.c
 * Author: AWTK Develop Team
 * Brief:  window_dialogs source
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
 * 2021-04-28 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "common.h"
#include "window_dialogs.h"

static ret_t on_toast(void *ctx, event_t *e) {
  dialog_toast("hello full awtk", 1000);
  return RET_OK;
}

static ret_t on_toast_long(void *ctx, event_t *e) {
  dialog_toast("Next, we want to enable a request for a review of the post, and we want content to return an empty string while waiting for the review. When the post receives approval, it should get published, meaning the text of the post will be returned when content is called.", 1000);
  return RET_OK;
}

static ret_t on_info(void *ctx, event_t *e) {
  dialog_info("info", "hello full awtk");
  return RET_OK;
}

static ret_t on_info_long(void *ctx, event_t *e) {
  dialog_info("info_long", "A blog post starts as an empty draft.\nWhen the draft is done, a review of the post is requested.\nWhen the post is approved, it gets published.");
  return RET_OK;
}

static ret_t on_warn(void *ctx, event_t *e) {
  dialog_warn("warn", "hello full awtk");
  return RET_OK;
}

static ret_t on_warn_long(void *ctx, event_t *e) {
  dialog_warn("warn_long", "A blog post starts as an empty draft.\nWhen the draft is done, a review of the post is requested.\nWhen the post is approved, it gets published.");
  return RET_OK;
}

static ret_t on_confirm(void *ctx, event_t *e) {
  dialog_confirm("confirm", "hello full awtk");
  return RET_OK;
}

static ret_t on_confirm_long(void *ctx, event_t *e) {
  dialog_confirm("confirm_long", "Using the state pattern means when the business requirements of the program change, we won’t need to change the code of the value holding the state or the code that uses the value");
  return RET_OK;
}

ret_t window_dialogs_open(void) {
  widget_t *win = window_open("dialogs");
  widget_child_on(win, "toast", EVT_CLICK, on_toast, NULL);
  widget_child_on(win, "toast_long", EVT_CLICK, on_toast_long, NULL);

  widget_child_on(win, "info", EVT_CLICK, on_info, NULL);
  widget_child_on(win, "info_long", EVT_CLICK, on_info_long, NULL);

  widget_child_on(win, "warn", EVT_CLICK, on_warn, NULL);
  widget_child_on(win, "warn_long", EVT_CLICK, on_warn_long, NULL);

  widget_child_on(win, "confirm", EVT_CLICK, on_confirm, NULL);
  widget_child_on(win, "confirm_long", EVT_CLICK, on_confirm_long, NULL);
  
  hook_locale_switch_events(win);

  return RET_OK;
}
