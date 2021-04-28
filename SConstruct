import os
import scripts.app_helper as app

DEPENDS_LIBS = [
  {
    "root" : '../awtk-restful-httpd',
    'shared_libs': ['httpd'],
    'static_libs': []
  },
  {
    "root" : '../awtk-ui-automation',
    'shared_libs': ['ui_automation'],
    'static_libs': []
  }
]

APP_SRC = os.path.normpath(os.path.join(os.getcwd(), 'src'))
APP_CPPPATH = []

helper = app.Helper(ARGUMENTS);
helper.set_deps(DEPENDS_LIBS).add_cpppath(APP_CPPPATH).call(DefaultEnvironment)

SConscript(['src/SConscript'])

