const RacingGame = require("../module/RacingGame");
const Participant = require("./Validate/Participant");
const Attempt = require("./Validate/Attempt");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

class Controller {
  constructor() {
    this.racingGame = new RacingGame();
  }

  start() {
    this.orderInputParticpant();
  }

  orderInputParticpant() {
    InputView.inputParticipants(this.isAllowParticipant.bind(this));
  }

  isAllowParticipant(input) {
    this.participant = new Participant(input);
    if (!this.participant.validate()) return this.orderInputParticpant();
    this.giveParticipant(input);
  }

  giveParticipant(input) {
    this.racingGame.getParticipant(input);
    this.orderInputAttempt();
  }

  orderInputAttempt() {
    InputView.inputAttempt(this.isAllowAttempt.bind(this));
  }

  isAllowAttempt(input) {
    this.attempt = new Attempt(input);
    if (!this.attempt.validate()) return this.orderInputAttempt();
    this.racingGame.getAttempt(input);
    this.orderPrintResult();
  }

  orderPrintResult() {
    OutputView.printResultTitle();
    this.orderPlaying();
  }

  orderPlaying() {
    const [processing, isEnd] = this.racingGame.playing();
    if (!isEnd) {
      OutputView.printProcess(processing);
      this.orderPlaying();
    } else {
      OutputView.printProcess(processing);
      OutputView.printResult(this.racingGame.findWinner());
    }
  }
}

module.exports = Controller;
