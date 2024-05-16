var navbarMenuLines = document.querySelector(".menu-lines");
function navbarMenu() {
  navbarMenuLines.addEventListener("click", function () {
    navbarMenuLines.classList.toggle("navbarMenuLinesActive");
  });
}
navbarMenu();

var chatMassageMinimize = document.querySelector(
  ".chat-offcanvas-icon-minimiz"
);
var chatMassagebox = document.querySelector(".chat-Massage-chat");
function chatMassage() {
  chatMassageMinimize.addEventListener("click", function () {
    chatMassagebox.classList.toggle("chatMassageboxMaximum");

 
  });
}
chatMassage();
// var offCanvasChatSearchInput = document.querySelector(
//   ".chat-offcanvas-form-input"
// );
// var offCanvasChatSearchIcon = document.querySelector(
//   ".chat-offcanvas-form-icon"
// );

// var offCanvasChatContactName = document.querySelectorAll(".chat-contact-name");

// function offCanvasChatSearch() {
//   offCanvasChatSearchIcon.addEventListener("click", function (a) {
//     a.preventDefault();
//     var offCanvasChatSearchInputValue =
//       offCanvasChatSearchInput.value.toUpperCase();
//     console.log(offCanvasChatSearchInputValue);

//     offCanvasChatSearchInput = offCanvasChatSearchInput.value;
//     console.log(offCanvasChatSearchInput);
//     offCanvasChatSearchInput.value = "";

//     for (var i = 0; i < offCanvasChatContactName.length; i++) {
//       if (
//         offCanvasChatSearchInputValue === offCanvasChatContactName[i].innerHTML
//       ) {
//         console.log("value same");
//       } else {
//         console.log("not same");
//       }
//     }
//   });
// }
// offCanvasChatSearch();
