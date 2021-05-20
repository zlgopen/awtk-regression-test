/**
 * File:   window_oom.c
 * Author: AWTK Develop Team
 * Brief:  window_oom source
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

#include "awtk.h"
#include "tkc/async.h"
#include "window_oom.h"

static ret_t on_gui(void* ctx, event_t* e) {
  void* ptr = TKMEM_ALLOC(0xffffffff);
  assert(ptr == NULL);

  return RET_OK;
}

static ret_t foo(void* ctx) {
  void* ptr = TKMEM_ALLOC(0xffffffff);
  assert(ptr == NULL);

  return RET_OK;
}

static ret_t on_non_gui(void* ctx, event_t* e) {
  async_call(foo, NULL, NULL);

  return RET_OK;
}

static ret_t on_low_memory(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  widget_set_text_utf8(widget_lookup(win, "status1", TRUE), "low memory");

  return RET_OK;
}

static ret_t on_out_of_memory(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  widget_set_text_utf8(widget_lookup(win, "status2", TRUE), "oom");

  return RET_OK;
}

ret_t window_oom_open(void) {
  widget_t* win = window_open("oom");
  widget_t* wm = window_manager();

  widget_child_on(win, "gui", EVT_CLICK, on_gui, win);
  widget_child_on(win, "nonegui", EVT_CLICK, on_non_gui, win);
  widget_on(wm, EVT_LOW_MEMORY, on_low_memory, win);
  widget_on(wm, EVT_OUT_OF_MEMORY, on_out_of_memory, win);

  return RET_OK;
}
