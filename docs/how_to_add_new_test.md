# 添加回归测试用例

这里以测试 auto\_adjust\_size 为例，演示添加回归测试用例的步骤。

## 1. 增加界面的 xml 文件

在 design/default/ui/目录中，添加 auto\_adjust\_size.xml 文件，内容如下：

```xml
<window text="Auto Adjust Size">
  <label name="label1" x="10" y="10" w="40" h="30" text="hello awtk" auto_adjust_size="true"/>
  <label name="label2" x="10" y="50" w="40" h="30" text="hello awtk\nhello awtk" 
    wrap_word="true" wrap_line="true" auto_adjust_size="true"/>
  <label name="label3" x="10" y="200" w="40" h="30" tr_text="hello awtk" auto_adjust_size="true"/>
  <label name="label4" x="10" y="240" w="40" h="30" tr_text="no tr text" auto_adjust_size="true"/>

  <button name="english" x="center:-90" y="bottom:10" w="80" h="30" text="English"/>
  <button name="chinese" x="center" y="bottom:10" w="80" h="30" text="Chinese"/>
  <button name="close" x="center:90" y="bottom:10" w="80" h="30" text="Back" on:click="back()"/>
</window>

```

> 这里要注意：
> * 需要为在自动测试脚本中引用的控件指定一个唯一的名字
> * 除非测试窗口动画，一般不要为窗口指定窗口动画，可以缩短测试时间。

## 2. 增加界面的 style 文件

根据情况添加 style 文件。

## 3. 修改 strings 文件

根据情况修改 strings 文件，这里添加：

```xml
<string name="hello awtk">
<language name="en_US">Hello AWTK</language>
<language name="zh_CN">AWTK，你好！</language>
</string>
```

## 4. 编写代码

测试代码放到 src 目录，每个窗口的代码放到独立的 .c/.h 中。比如：

```
window_auto_adjust_size.h
window_auto_adjust_size.c
```

## 5. 在主窗口中加入测试窗口的入口

* 修改 design/default/ui/main.xml，添加一个列表项目：

```xml
<list_item style="even_clickable" name="auto_adjust_size" text="Test Auto Adjust Resize" /> 
```

* 修改 src/window_main.c，添加列表项目的事件处理函数，打开对应的窗口：

```c
static ret_t on_open_auto_adjust_size(void *ctx, event_t *e) {
  window_auto_adjust_size_open();
  return RET_OK;
}

...

widget_child_on(win, "auto_adjust_size", EVT_CLICK, on_open_auto_adjust_size,
                  win)
```

## 6. 编写测试脚本

测试脚本放到 uitests 目录，放到独立的文件中，并为其取一个有意义的名称。如：auto_adjust_size.js

```js

exports.testChinese= function(driver) {
    return driver
          .elementById('current_window').text().should.become("Regression Test")
          .elementById('auto_adjust_size').click().sleep(100)
          .elementById('current_window').text().should.become("Auto Adjust Size")
          .elementById('chinese').click().sleep(100)
          .elementById('label1').getAttribute('x').should.become(10)
          .elementById('label1').getAttribute('w').should.become(81)
          .elementById('label1').getAttribute('h').should.become(20)
          .elementById('label2').getAttribute('w').should.become(96)
          .elementById('label2').getAttribute('h').should.become(40)
          .elementById('label3').getAttribute('w').should.become(108)
          .elementById('label3').getAttribute('h').should.become(20)
          .elementById('label4').getAttribute('w').should.become(81)
          .elementById('label4').getAttribute('h').should.become(20)
          .back().sleep(100)
          .elementById('current_window').text().should.become("Regression Test")
}

exports.testEnglish = function(driver) {
    return driver
          .elementById('current_window').text().should.become("Regression Test")
          .elementById('auto_adjust_size').click().sleep(100)
          .elementById('current_window').text().should.become("Auto Adjust Size")
          .elementById('english').click().sleep(100)
          .elementById('label1').getAttribute('x').should.become(10)
          .elementById('label1').getAttribute('w').should.become(81)
          .elementById('label1').getAttribute('h').should.become(20)
          .elementById('label2').getAttribute('w').should.become(96)
          .elementById('label2').getAttribute('h').should.become(40)
          .elementById('label3').getAttribute('w').should.become(92)
          .elementById('label3').getAttribute('h').should.become(20)
          .elementById('label4').getAttribute('w').should.become(81)
          .elementById('label4').getAttribute('h').should.become(20)
          .back().sleep(100)
          .elementById('current_window').text().should.become("Regression Test")
}
```

在 index.js 中导入测试用例

```js
let auto_adjust_size = require('./auto_adjust_size')
```

在 index.js 中引用测试用例

```js
      it("auto_adjust_size_english", function () {
        return auto_adjust_size.testEnglish(driver);
      });

      it("auto_adjust_size_chinese", function () {
        return auto_adjust_size.testChinese(driver);
      });
```

## 7. 注意事项

* 测试从主窗口开始，测试完成后返回主窗口。一般遵循下面这个套路：

```js
exports.testEnglish = function(driver) {
    return driver
          .elementById('current_window').text().should.become("Regression Test")
          //打开测试窗口，窗口名换成实际窗口名
          .elementById('auto_adjust_size').click().sleep(100)
          //确认测试窗口成功打开，窗口标题换成实际的标题
          .elementById('current_window').text().should.become("Auto Adjust Size")
          //测试代码
          ...
          //确认成功返回主窗口
          .back().sleep(100)
          .elementById('current_window').text().should.become("Regression Test")
}
```

* 打开和关闭窗口后，要 sleep 一定时间。无窗口动画 sleep(100)，有窗口动画 sleep(600)。

* 预期的参数可以通过 appium-inspector 查看。

> 请参考：https://github.com/zlgopen/awtk-ui-automation/blob/master/docs/how_to_install_appium_for_awtk.md

* 测试时至少保证 OpenGL 版本正常。