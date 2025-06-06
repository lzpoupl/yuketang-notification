import { notify } from "./util";

export type Settings = {
  autoAnswer: boolean;
  autoAnswerTypes: number[];
  autoDanmaku: number;
  notificationSound: boolean;
};

chrome.storage.local.get("settings", (data) => {
  if (!data.settings) {
    chrome.storage.local.set({
      settings: {
        autoAnswer: true,
        autoDanmaku: 0,
        notificationSound: true,
        autoAnswerTypes: [1, 2],
      },
    });
  }
});

chrome.runtime.onMessage.addListener((message: any, sender, sendResponse) => {
  console.log("background message: ", message);
  if (message.type === "getProblems") {
    chrome.storage.local
      .get("problems")
      .then((p) => console.log("request data:", p));
    chrome.storage.local.get("problems").then(sendResponse);
    return true;
  }
  if (message.type === "testNotification") {
    notify("测试弹窗");
  }
  if (message.type === "receiveQuestion") {
    notify("有新题目辣！");
  }
});
