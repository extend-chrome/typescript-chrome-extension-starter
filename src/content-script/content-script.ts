console.log('content-script.ts')

const button = document.createElement('button')
button.style.position = 'fixed'
button.style.top = '0'
button.style.left = '0'
button.innerText = 'Send Message'
button.onclick = function () {
  chrome.runtime.sendMessage({ greeting: 'WAKE UP' })
}

document.body.append(button);