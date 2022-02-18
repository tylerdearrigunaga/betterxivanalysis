// background.js

function makeWidescreen() {
  let sidebar = document.querySelectorAll('[class^="App-module_sidebar"]')[0];
  sidebar.style = "display: none;";
  let mainAppContainer = document.querySelectorAll('[class^="App-module_container"]')[0];
  mainAppContainer.style = "max-width: 100%;";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: makeWidescreen
  });
});