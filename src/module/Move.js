const MissionUtils = require("@woowacourse/mission-utils");
const { UNIT } = require("../Utils/constant");

class Move {
  isMove() {
    return this.makeNumber() > UNIT.MIN_NUMBER;
  }
  makeNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
}

module.exports = Move;
