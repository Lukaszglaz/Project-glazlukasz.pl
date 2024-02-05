const msgStatus = document.querySelector(".msg-status");

console.log(document.location.search);

if (document.location.search === "?mail_status=sent") {
  msgStatus.classList.add("success");
  (msgStatus.textContent = "The message has been successfully sent."),
    setTimeout(() => {
      msgStatus.classList.remove("success");
    }, 3000);
} else if (document.location.search === "?mail_status=error") {
  msgStatus.classList.add("error");
  msgStatus.textContent =
    "An error occured. The message was not sent correctly.";

  setTimeout(() => {
    msgStatus.classList.remove("error");
  }, 3000);
}
