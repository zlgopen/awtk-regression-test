# awtk-regression-test

## 1.介绍

AWTK 回归测试。

有些需要界面交互的测试，无法放到单元测试里，就放到回归测试里。

一般来说修改代码时，要么通过单元测试验证，要么通过回归测试验证，可以有效避免新加功能或修复BUG时引入新的问题。

## 2.准备

0. 安装Appium

> 请参考[安装支持 AWTK 自动测试的 appium](https://github.com/zlgopen/awtk-ui-automation/blob/master/docs/how_to_install_appium_for_awtk.md)

1. 获取 awtk 并编译

```
git clone https://github.com/zlgopen/awtk.git
cd awtk; scons; cd -
```

2. 获取 awtk-mvvm 并编译
```
git clone https://github.com/zlgopen/awtk-mvvm.git
git clone https://github.com/jerryscript-project/jerryscript.git awtk-mvvm/3rd/jerryscript
cd awtk-mvvm; scons
```

3. 获取 awtk-restful-httpd 并编译
```
git clone https://github.com/zlgopen/awtk-restful-httpd.git
cd awtk-restful-httpd; scons; cd -
```

4. 获取 awtk-ui-automation 并编译
```
git clone https://github.com/zlgopen/awtk-ui-automation.git
cd awtk-ui-automation; scons
```

5. 获取 awtk-widget-table-view 并编译

```
git clone https://github.com/zlgopen/awtk-widget-table-view.git
cd awtk-widget-table-view; scons; cd -
```

6. 获取 awtk-widget-table-view-mvvm 并编译

```
git clone https://github.com/zlgopen/awtk-widget-table-view-mvvm.git
cd awtk-widget-table-view-mvvm; scons; cd -
```

7. 获取 awtk-widget-slidable-row 并编译

```
git clone https://github.com/zlgopen/awtk-widget-slidable-row.git
cd awtk-widget-slidable-row; scons; cd -
```

8. 获取 awtk-regression-test 并编译

```
git clone https://github.com/zlgopen/awtk-regression-test.git
cd awtk-regression-test
```

* 生成资源

```
python ./scripts/update_res.py all
```

> 或者通过 designer 生成资源

* 编译PC版本

```
scons
```

* 编译LINUX FB版本

```
scons LINUX_FB=true
```

> 完整编译选项请参考[编译选项](https://github.com/zlgopen/awtk-widget-generator/blob/master/docs/build_options.md)


## 3.运行

> 手工运行(方便添加测试时验证)

```
./bin/demo
```

> 运行自动测试

```
cd uitests

#第一次运行时，先安装依赖的软件包
npm install

#运行测试
npm run test
```

> 先启动Appium。

> 本文以 Linux/MacOS 为例，Windows 可能会微妙差异，请酌情处理。

# 4. 文档

* [如何添加回归测试](docs/how_to_add_new_test.md)

