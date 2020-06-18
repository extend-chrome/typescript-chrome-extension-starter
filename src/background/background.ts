chrome.browserAction.onClicked.addListener(() => {
  alert('you clicked?')
})

chrome.runtime.onMessage.addListener(({ greeting }) => {
  alert(`you said, "${greeting}"`)
})
