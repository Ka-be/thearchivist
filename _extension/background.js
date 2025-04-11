chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
      const archiveUrl = "https://archive.ph/" + tab.url;
      chrome.tabs.create({ url: archiveUrl });
    }
  });
  