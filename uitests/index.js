"use strict";

let Q = require('q');
let wd = require("wd");
let _ = require('underscore');
require("awtk-appium-js-helpers/setup.js");
let serverConfigs = require('awtk-appium-js-helpers/appium-servers');
let startApp = require("awtk-appium-js-helpers/start-app").startApp;

let auto_adjust_size = require('./auto_adjust_size')

const appName = '../bin/demo'

describe("awtk simple", function () {
      let driver;
      let allPassed = true;
      this.timeout(300000);

      before(async function () {
            let serverConfig = serverConfigs.local;
            driver = wd.promiseChainRemote(serverConfig);
            require("awtk-appium-js-helpers/logging").configure(driver);

            await startApp(appName);

            let desired = _.clone(require("awtk-appium-js-helpers/caps").awtk);
            return driver.init(desired);
      });

      after(function () {
            return driver.quit()
      });

      afterEach(function () {
            allPassed = allPassed && this.currentTest.state === 'passed';
      });

      it("auto_adjust_size_english", function () {
        return auto_adjust_size.testEnglish(driver);
      });

      it("auto_adjust_size_chinese", function () {
        return auto_adjust_size.testChinese(driver);
      });
});
