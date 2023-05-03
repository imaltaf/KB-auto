const input = document.querySelector('#input input');
const output = document.querySelector('#output');

input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Enter key
    const command = input.value;
    const outputLine = document.createElement('p');
    outputLine.textContent = '$ ' + command;
    output.appendChild(outputLine);
    input.value = '';
    executeCommand(command);
  }
});

function executeCommand(command) {
  const outputLine = document.createElement('p');
  let response = '';
  switch (command) {
    case 'help':
      response = 'This is a fake terminal, type any command you want!';
      break;
    case 'clear':
      output.innerHTML = '';
      return;
    default:
      response = 'Unknown command: ' + command;
  }
  outputLine.textContent = response;
  output.appendChild(outputLine);
  output.scrollTop = output.scrollHeight;
}


