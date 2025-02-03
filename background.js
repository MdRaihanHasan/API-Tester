let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let blockedSites = [];

// Load saved state
chrome.storage.sync.get(['timeLeft', 'blockedSites'], (data) => {
  if (data.timeLeft) timeLeft = data.timeLeft;
  if (data.blockedSites) blockedSites = data.blockedSites;
});

// Handle messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'blockSite') {
    blockedSites.push(message.site);
    chrome.storage.sync.set({ blockedSites });
    chrome.webRequest.onBeforeRequest.addListener(
      blockSite,
      { urls: blockedSites.map(site => `*://${site}/*`) },
      ['blocking']
    );
  }
});

// Block sites
function blockSite(details) {
  return { cancel: true };
}

// Timer logic
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: 'Focus Mode+',
        message: "Time's up! Take a break."
      });
    }
    // Save the current time left
    chrome.storage.sync.set({ timeLeft });
  }, 1000);
}

// Start the timer when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  startTimer();
});