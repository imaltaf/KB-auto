

///coma add

var inputField = document.getElementById("inputIds");
inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        copyIds();
    }
});

function copyIds() {
    var input = inputField.value;
    var ids = input.split(" ");
    var count = ids.length;
    document.getElementById("count").innerHTML = "Count: " + count;
    document.getElementById("output").innerHTML = count + ":" + ids.join(", ");
    var temp = document.createElement("textarea");
    temp.value = count + ":" + ids.join(",");
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    
}

function resetIds() {
    inputField.value = "";
    document.getElementById("count").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}


//special character remover
function processInput() {
    const input = document.getElementById("input").value.replace(/&/g, "and");
    const output = input.replace(/[^\w\s]/gi, " ");
    document.getElementById("output").innerText = output;
  }

  function copyOutput() {
    const output = document.getElementById("output").innerText;
    navigator.clipboard.writeText(output);
  }

  function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
  }

  document.getElementById("input").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      processInput();
    }
  });



//content copy js
const copyBtn = document.querySelector('.copy-btn');
const originalContent = document.querySelector('[data-copy]');
const copiedMsg = document.querySelector('.copied-msg');

copyBtn.addEventListener('click', function() {
  const contentToCopy = originalContent.getAttribute('data-copy');
  navigator.clipboard.writeText(contentToCopy);
  copiedMsg.style.display = 'inline-block';
  setTimeout(function() {
    copiedMsg.style.display = 'none';
  }, 2000);
});
