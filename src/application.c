/**
 * File:   application.c
 * Author: AWTK Develop Team
 * Brief:  application
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
 * 2021-03-15 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "tkc/async.h"
#include "awtk.h"

#ifndef AWTK_WEB
#include "automation_agent/automation_agent.h"
#endif /*AWTK_WEB*/

#include "assets.inc"
#include "window_main.h"

ret_t application_init() {
  socket_init();
  automation_agent_start(8000);
  async_call_init();

  window_main_open();
  return RET_OK;
}

ret_t application_exit() {
  log_debug("application_exit\n");
  automation_agent_stop();
  async_call_deinit();
  socket_deinit();
  return RET_OK;
}

#include "awtk_main.inc"
