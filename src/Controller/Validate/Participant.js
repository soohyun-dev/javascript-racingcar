const OutputView = require("../../View/OutputView");
const { ISALLOW } = require("../../Utils/constant");
const { ERROR } = require("../../Utils/errorMessage");

class Participant {
  #input;

  constructor(input) {
    this.#input = input.split(",");
  }

  validate() {
    try {
      if (this.check()) throw new Error();
    } catch {
      OutputView.printError(ERROR.PARTICIPANT);
      return ISALLOW.FALSE;
    }
    return ISALLOW.TRUE;
  }

  check() {
    return (
      this.isAllowCnt() ||
      this.isAllowLength() ||
      this.isHaveAnother() ||
      this.isDuplicate()
    );
  }

  isAllowCnt() {
    return this.#input.length === 0;
  }

  isAllowLength() {
    let check = false;
    this.#input.forEach((participant) => {
      if (participant.length > 5 || participant.length < 1) check = true;
    });

    return check;
  }

  isHaveAnother() {
    const regex = /^[가-힣|a-z|A-Z|]/;
    let check = false;
    this.#input.forEach((participant) => {
      participant.split("").forEach((value) => {
        if (!regex.test(value)) check = true;
      });
    });
    return check;
  }

  isDuplicate() {
    return this.#input.length !== [...new Set(this.#input)].length;
  }
}

module.exports = Participant;
