/**
 * File:   window_self_layout.c
 * Author: AWTK Develop Team
 * Brief:  window_self_layout source
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
 * 2021-05-17 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "window_self_layout.h"

ret_t window_self_layout_open(void) {
  window_open("self_layout");

  return RET_OK;
}

