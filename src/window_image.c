/**
 * File:   window_image.c
 * Author: AWTK Develop Team
 * Brief:  window_image source
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

#include "window_image.h"
#include "base/image_manager.h"

static ret_t on_image_click(void* ctx, event_t* e) {
  widget_t* image = WIDGET(e->target);
  widget_t* win = widget_get_window(image);
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (status != NULL) {
    char str[64];
    tk_snprintf(str, sizeof(str)-1, "%s:%d", image->name, IMAGE_BASE(image)->selected);
    widget_set_text_utf8(status, str);
  }

  return RET_OK;
}

static ret_t on_unload_all(void* ctx, event_t* e) {
  image_manager_unload_all(image_manager());

  return RET_OK;
}

static ret_t on_unload_unused(void* ctx, event_t* e) {
  image_manager_unload_unused(image_manager(), 1000);
  return RET_OK;
}

static ret_t on_other_test(void* ctx, event_t* e) {
  bitmap_t img;
  image_manager_preload(image_manager(), "earth");
  image_manager_get_bitmap(image_manager(), "earth",&img);
  image_manager_unload_bitmap(image_manager(), &img);

  return RET_OK;
}

ret_t window_image_open(void) {
  widget_t* win = window_open("image");

  widget_child_on(win, "image1", EVT_CLICK, on_image_click, win);
  widget_child_on(win, "image2", EVT_CLICK, on_image_click, win);
  widget_child_on(win, "image3", EVT_CLICK, on_image_click, win);

  widget_child_on(win, "unload_unused", EVT_CLICK, on_unload_unused, win);
  widget_child_on(win, "unload_all", EVT_CLICK, on_unload_all, win);
  widget_child_on(win, "other_test", EVT_CLICK, on_other_test, win);

  return RET_OK;
}
