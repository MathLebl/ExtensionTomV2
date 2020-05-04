chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "insert.js"
  });
});

chrome.contextMenus.create({
  title: "Extension Tom",
  contexts:["selection"]
});
