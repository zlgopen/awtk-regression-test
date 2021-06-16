/**
 * File:   window_clip.c
 * Author: AWTK Develop Team
 * Brief:  window_clip source
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
 * 2021-06-11 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_clip.h"

static ret_t on_paint(void* ctx, event_t* e) {
  rect_t r;
  char buff[64];
  widget_t* win = WIDGET(ctx);
  paint_event_t* evt = paint_event_cast(e);
  canvas_t* c  = evt->c; 
  canvas_get_clip_rect(c, &r);

  r.x -= win->x;
  r.y -= win->y;
  tk_snprintf(buff, sizeof(buff)-1,  "%d,%d,%d,%d", (int)r.x, (int)r.y, (int)r.w, (int)r.h);
  widget_set_child_text_utf8(WIDGET(ctx), "status", buff);

  log_debug("info:%s\n", buff);
  return RET_OK;
}

ret_t window_clip_open(const char* name) {
  widget_t* win = window_open(name);

  widget_child_on(win, "probe", EVT_BEFORE_PAINT, on_paint, win);

  return RET_OK;
}

