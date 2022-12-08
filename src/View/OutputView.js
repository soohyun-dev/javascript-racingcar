const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("../Utils/constant");

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printProcess(memberList) {
    Object.keys(memberList).forEach((member) => {
      Console.print(`${member} : ${UNIT.WIDTH.repeat(memberList[member])}`);
    });
    Console.print("");
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printResultTitle() {
    Console.print(MESSAGE.RESULT_TITLE);
  },

  printResult(winner) {
    Console.print(`${MESSAGE.RESULT}${winner.join(", ")}`);
    Console.close();
  },
};

module.exports = OutputView;
