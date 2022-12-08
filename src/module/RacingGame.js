const { UNIT } = require("../Utils/constant");
const Move = require("./Move");

class RacingGame {
  constructor() {
    this.move = new Move();
    this.memberList = {};
    this.attempt = 0;
    this.winnerScore = 0;
  }

  getParticipant(input) {
    this.makeList(input.split(","));
  }

  makeList(participants) {
    participants.forEach((participant) => {
      this.memberList[participant] = 0;
    });
  }

  getAttempt(input) {
    this.attempt = +input;
  }

  playing() {
    Object.keys(this.memberList).forEach((member) => {
      if (this.move.isMove()) {
        this.memberList[member] += UNIT.MOVE;
        this.winnerScore = Math.max(this.winnerScore, this.memberList[member]);
      }
    });
    this.process();
    return [this.memberList, this.isEnd()];
  }

  process() {
    this.attempt += UNIT.NEXT;
  }

  isEnd() {
    return this.attempt === UNIT.END;
  }

  findWinner() {
    const winner = [];
    Object.keys(this.memberList).forEach((member) => {
      if (this.winnerScore === this.memberList[member]) winner.push(member);
    });
    return winner;
  }
}

module.exports = RacingGame;
