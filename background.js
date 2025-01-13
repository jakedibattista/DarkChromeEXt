let isDarkMode = true;

chrome.storage.local.set({ isDarkMode: true });

chrome.action.onClicked.addListener(async (tab) => {
  isDarkMode = !isDarkMode;
  
  chrome.storage.local.set({ isDarkMode });
  
  if (isDarkMode) {
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['darkmode.css']
    });
  } else {
    await chrome.scripting.removeCSS({
      target: { tabId: tab.id },
      files: ['darkmode.css']
    });
  }
});
