"use strict";

const Console = require("console").Console;
const chalk = require("chalk");

class Logger {
  constructor(prefix, options) {
    options = options || {};
    this.console = new Console(options.stdout || process.stdout, options.stderr || process.stderr);
    this.prefix = prefix;
  }

  trace(text) {
    this.console.log(chalk.white(`${this.prefix}: [TRACE] ` + text));
  }
  debug(text) {
    this.console.log(chalk.blue(`${this.prefix}: [DEBUG] ` + text));
  }
  info(text) {
    this.console.log(chalk.green(`${this.prefix}: [INFO] ` + text));
  }
  warn(text) {
    this.console.log(chalk.yellow(`${this.prefix}: [WARN] ` + text));
  }
  error(text) {
    // this.console.log(`${this.prefix}: [ERROR] ` + text);
    this.console.error(chalk.red(`${this.prefix}: [ERROR] ` + text));
  }
  fatal(text) {
    // this.console.log(`${this.prefix}: [FATAL] ` + text);
    this.console.error(chalk.bgRed.bold(`${this.prefix}: [FATAL] ` + text));
  }
}

module.exports = {
  create: prefix => new Logger(prefix),
};
