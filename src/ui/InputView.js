/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve) => {
      Console.readLine("다리의 길이를 입력해주세요.\n", (inputSize) => {
        if (this.validateInput(inputSize)) {
          resolve(inputSize);
        }
      });
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  validateInput(inputSize) {
    if (inputSize >= 3 && inputSize <= 20) {
      return true;
    }
    throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },
};

module.exports = InputView;
