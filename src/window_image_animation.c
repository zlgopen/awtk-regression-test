/**
 * File:   window_image_animation.c
 * Author: AWTK Develop Team
 * Brief:  window_image_animation source
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
#include "window_image_animation.h"

static ret_t on_play_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* image_animation = widget_lookup(win, "a1", TRUE);
  image_animation_play(image_animation);
  assert(IMAGE_ANIMATION(image_animation)->timer_id != TK_INVALID_ID);

  return RET_OK;
}

static ret_t on_pause_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* image_animation = widget_lookup(win, "a1", TRUE);
  image_animation_pause(image_animation);
  assert(IMAGE_ANIMATION(image_animation)->timer_id == TK_INVALID_ID);

  return RET_OK;
}

static ret_t on_stop_click(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  widget_t* image_animation = widget_lookup(win, "a1", TRUE);
  image_animation_stop(image_animation);
  assert(IMAGE_ANIMATION(image_animation)->timer_id == TK_INVALID_ID);

  return RET_OK;
}

ret_t window_image_animation_open(void) {
  widget_t* win = window_open("image_animation");

  widget_child_on(win, "play", EVT_CLICK, on_play_click, win);
  widget_child_on(win, "stop", EVT_CLICK, on_stop_click, win);
  widget_child_on(win, "pause", EVT_CLICK, on_pause_click, win);

  return RET_OK;
}
