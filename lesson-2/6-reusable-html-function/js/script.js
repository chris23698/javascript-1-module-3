const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageWarningContainer = document.querySelector(".message-warning");
const messageErrorContainer = document.querySelector(".message-error");

messageSuccessContainer.innerHTML = createToaster("success", "File is uploaded");
messageInfoContainer.innerHTML = createToaster("info", "File is uploaded, but we have some problems");
messageWarningContainer.innerHTML = createToaster("warning", "Files must be less then 5mb");
messageErrorContainer.innerHTML = createToaster("error", "File is not uploaded");
