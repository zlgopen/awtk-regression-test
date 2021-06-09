/**
 * File:   window_vpage.c
 * Author: AWTK Develop Team
 * Brief:  window_vpage source
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
 * 2021-06-09 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_vpage.h"

static ret_t on_vpage_event(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* page = WIDGET(e->target);
  widget_t* status = NULL;
  const char* type = NULL;

  switch(e->type) {
    case EVT_VPAGE_WILL_OPEN: {
      type = "will_open";
      break;
    }
    case EVT_VPAGE_OPEN: {
      type = "open";
      break;
    }
    case EVT_VPAGE_CLOSE: {
      type = "close";
      break;
    }
    default:break;
  }

  log_debug("%s:%s\n", type, page->name);
  status = widget_lookup(win, type, TRUE);
  widget_set_text_utf8(status, page->name);

  return RET_OK;
}


ret_t window_vpage_open(const char* name) {
  widget_t* win = window_open(name);

  widget_child_on(win, "page1", EVT_VPAGE_WILL_OPEN, on_vpage_event, win);
  widget_child_on(win, "page1", EVT_VPAGE_OPEN, on_vpage_event, win);
  widget_child_on(win, "page1", EVT_VPAGE_CLOSE, on_vpage_event, win);

  widget_child_on(win, "page2", EVT_VPAGE_WILL_OPEN, on_vpage_event, win);
  widget_child_on(win, "page2", EVT_VPAGE_OPEN, on_vpage_event, win);
  widget_child_on(win, "page2", EVT_VPAGE_CLOSE, on_vpage_event, win);
  
  widget_child_on(win, "page3", EVT_VPAGE_WILL_OPEN, on_vpage_event, win);
  widget_child_on(win, "page3", EVT_VPAGE_OPEN, on_vpage_event, win);
  widget_child_on(win, "page3", EVT_VPAGE_CLOSE, on_vpage_event, win);
  
  widget_child_on(win, "page4", EVT_VPAGE_WILL_OPEN, on_vpage_event, win);
  widget_child_on(win, "page4", EVT_VPAGE_OPEN, on_vpage_event, win);
  widget_child_on(win, "page4", EVT_VPAGE_CLOSE, on_vpage_event, win);
  return RET_OK;
}
