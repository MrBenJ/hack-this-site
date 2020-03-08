const Editor = CodeMirror.fromTextArea(
  document.getElementById('editor'),
  {
    mode: 'javascript',
    lineNumbers: true
  }
);

const hackableDiv = document.getElementById('hackable');

function initCodingSession() {
  document.querySelector('.editor-section.hide').classList.remove('hide');
  hackableDiv.innerHTML = 'Write a function that flattens an array';
}

const observer = new MutationObserver((mutationList, observer) => {
  if (mutationList[0].addedNodes[0].textContent === 'HELLO WORLD') {
    hackableDiv.innerHTML = 'GOOD JOB! PROCEEDING TO THE NEXT STEP!';
    setTimeout(initCodingSession, 1500);
  }
});

observer.observe(hackableDiv, { childList: true });
