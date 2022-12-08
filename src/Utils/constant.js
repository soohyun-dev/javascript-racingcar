const MESSAGE = {
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ATTEMPT: "\n시도할 회수는 몇회인가요?\n",
  RESULT_TITLE: "\n실행 결과",
  RESULT: "최종 우승자 : ",
};

const ISALLOW = {
  TRUE: true,
  FALSE: false,
};

const UNIT = {
  WIDTH: "-",
  MIN_NUMBER: 4,
  NEXT: -1,
  MOVE: 1,
  END: 0,
};

module.exports = { MESSAGE, ISALLOW, UNIT };
