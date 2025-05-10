export function notify(message: string) {
  chrome.notifications.create({
    title: "雨课堂助手",
    message,
    type: "basic",
    iconUrl: "changjiang.yuketang.cn_web.png",
  });
}
