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
var chatContacLi = document.querySelectorAll(".chat-contact-li");
var chatContactDp = document.querySelectorAll(".chat-contact-dp");
var chatContactName = document.querySelectorAll(".chat-contact-name");
var chatContactMassageDp = document.querySelectorAll(
  ".chat-contact-massage-dp"
);
var chatContactMassageName = document.querySelectorAll(
  ".chat-contact-massage-name"
);
var chatOffCanvasCloseBtn = document.querySelector(
  ".chat-offcanvas-massege-close-btn"
);
var chatMassageInput = document.querySelector(".chat-massage-input");
var chatMassageBtnSend = document.querySelector(".chat-massage-send-btn");

var massegeText = document.querySelector(".massege-text.me").innerHTML;
var massagesTextTime = document.querySelector(".massages-text-time.me");
var chatHistory = document.querySelector(".chat-history");
chatMassageBtnSend.addEventListener("click", function () {
  chatHistory.innerHTML = `<span class="massege-text me bg-primary text-light py-2 px-3 rounded-2">${chatMassageInput.value}</span>


 

<span class="chat-massages-time"> 12:16 PM </span>`;

  chatMassageInput.value = "";
});

function chatMassageMaximum() {
  chatOffCanvasCloseBtn.addEventListener("click", function () {
    chatMassagebox.style.display = "none";
  });

  for (var a = 0; a <= chatContacLi.length; a++) {
    chatContacLi[0].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/01.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[0].innerHTML;
      });
    });
    chatContacLi[1].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/02.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[1].innerHTML;
      });
    });
    chatContacLi[2].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/placeholder.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[2].innerHTML;
      });
    });
    chatContacLi[3].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/04.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[3].innerHTML;
      });
    });
    chatContacLi[4].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/05.jpg";
        z.style.border = "2px solid #0f6fec";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[4].innerHTML;
      });
    });
    // chatContacLi[5].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[5].innerHTML;
    //   });
    // });
    // chatContacLi[6].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[6].innerHTML;
    //   });
    // });
    // chatContacLi[7].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[7].innerHTML;
    //   });
    // });
    // chatContacLi[8].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[8].innerHTML;
    //   });
    // });
    // chatContacLi[9].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[9].innerHTML;
    //   });
    // });
    // chatContacLi[10].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[10].innerHTML;
    //   });
    // });
    // chatContacLi[11].addEventListener("click", function () {
    //   chatMassagebox.style.display = "flex";
    //   chatContactMassageDp.forEach(function (z) {
    //     z.src = "Avatar/02.jpg";
    //   });
    //   chatContactMassageName.forEach(function (x) {
    //     x.innerHTML = chatContactName[11].innerHTML;
    //   });
    // });
    break;
  }
  for (var b = 0; b <= chatContactDp.length; b++) {}

  for (var c = 0; c <= chatContactName.length; c++) {}
}
chatMassageMaximum();

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
