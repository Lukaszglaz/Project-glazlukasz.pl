var copyButton = document.getElementById("copy-button");
var codeBlock = document.querySelector(".code-wrape code");

var clipboard = new ClipboardJS(copyButton, {
  text: function () {
    return codeBlock.innerText;
  },
});

clipboard.on("success", function (e) {
  copyButton.innerHTML = '<i class="bx bx-check"></i> Skopiowane!';
  setTimeout(function () {
    copyButton.innerHTML = '<i class="bx bx-copy"></i>';
  }, 1000);
  e.clearSelection();
});
