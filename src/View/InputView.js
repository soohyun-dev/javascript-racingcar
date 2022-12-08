const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../Utils/constant");

const InputView = {
  inputParticipants(input) {
    Console.readLine(MESSAGE.START, input);
  },

  inputAttempt(input) {
    Console.readLine(MESSAGE.ATTEMPT, input);
  },
};

module.exports = InputView;
