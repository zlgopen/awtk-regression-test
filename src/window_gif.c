/**
 * File:   window_gif.c
 * Author: AWTK Develop Team
 * Brief:  window_gif source
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
#include "window_gif.h"

static ret_t update_status(widget_t* gif) {
  widget_t* win = widget_get_window(gif);
  widget_t* status = widget_lookup(win, "status", TRUE);

  if (status != NULL) {
    char str[64];
    tk_snprintf(str, sizeof(str) - 1, "%s:%d", gif->name, GIF_IMAGE(gif)->running);
    widget_set_text_utf8(status, str);
  }

  return RET_OK;
}

static ret_t on_gif_click(void* ctx, event_t* e) {
  widget_t* gif = WIDGET(e->target);
  if (GIF_IMAGE(gif)->running) {
    gif_image_pause(gif);
  } else {
    gif_image_play(gif);
  }
  return update_status(gif);
}

static ret_t on_play_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* gif = widget_lookup(win, "bee", TRUE);
  gif_image_play(gif);

  return update_status(gif);
}

static ret_t on_pause_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* gif = widget_lookup(win, "bee", TRUE);
  gif_image_pause(gif);

  return update_status(gif);
}

static ret_t on_stop_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* gif = widget_lookup(win, "bee", TRUE);
  gif_image_stop(gif);
  assert(GIF_IMAGE(gif)->index == 0);

  return update_status(gif);
}

ret_t window_gif_open(void) {
  widget_t* win = window_open("gif");

  widget_child_on(win, "play", EVT_CLICK, on_play_click, win);
  widget_child_on(win, "stop", EVT_CLICK, on_stop_click, win);
  widget_child_on(win, "pause", EVT_CLICK, on_pause_click, win);
  widget_child_on(win, "bee", EVT_CLICK, on_gif_click, win);

  return RET_OK;
}
