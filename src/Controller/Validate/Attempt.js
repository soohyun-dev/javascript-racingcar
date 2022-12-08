const OutputView = require("../../View/OutputView");
const { ISALLOW } = require("../../Utils/constant");
const { ERROR } = require("../../Utils/errorMessage");

class Attempt {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    try {
      if (this.check()) throw new Error();
    } catch {
      OutputView.printError(ERROR.ATTEMPT);
      return ISALLOW.FALSE;
    }
    return ISALLOW.TRUE;
  }

  check() {
    return this.isNaturalNumber() || this.isAllowRange();
  }

  isNaturalNumber() {
    return String(this.#input).length !== String(~~this.#input).length;
  }

  isAllowRange() {
    return ~~this.#input < 1 || ~~this.#input > 20;
  }
}

module.exports = Attempt;
