"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allure_cucumberjs_1 = require("allure-cucumberjs");
class Reporter extends allure_cucumberjs_1.CucumberJSAllureFormatter {
    constructor(options) {
        super(options, new allure_cucumberjs_1.AllureRuntime({ resultsDir: "./allure-results" }), {});
    }
}
exports.default = Reporter;
