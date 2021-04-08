# 离线配置回归测试

本文是针对 windows 的环境的，其他环境可能会出现问题。

## 1.下载

> 在内部 share 服务器中下载下载：node_modules（awtk-regression-test）.7z

## 2. 解压

> 把 node_modules（awtk-regression-test）.7z 文件解压到 awtk-regression-test\uitests 文件夹中。

## 3. 运行

### 3.1 启动 Appium-desktop

> 1. 如果没有安装 appium 的话，请参考[离线安装支持 AWTK 自动测试的 appium](https://github.com/zlgopen/awtk-ui-automation/blob/master/docs/how_to_offline_install_appium_for_awtk.md)。
>
> 2. 启动 Appium-desktop，具体操作可以查看 离线安装支持 AWTK 自动测试的 appium。

### 3.2 编译项目

> 1. 进入 awtk-regression-test 项目
> 2. cmd 执行 python ./scripts/update_res.py all
> 3. cmd 执行 scons 

### 3.3 运行自动测试

> 1. 进入 awtk-regression-test/uitests 目录
> 2. cmd 执行 npm run test



