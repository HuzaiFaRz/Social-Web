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
var chatMassagebox = document.querySelector(".chat-Massage-chat-box");
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
var massegeText = document.querySelector(".massege-text.me");
var massagesTextTime = document.querySelector(".massages-text-time.me");
var chatHistory = document.querySelector(".chat-history");

// function chatMassageBoxMove() {
//   chatMassagebox.addEventListener("mousedown", function (e) {
//     chatMassagebox.classList.add("dragging");
//   });
//   document.addEventListener("mousemove", function (e) {
//     if (chatMassagebox.classList.contains("dragging")) {
//       chatMassagebox.style.top = e.clientY + "px";
//       chatMassagebox.style.left = e.clientX + "px";
//     }
//   });
//   document.addEventListener("mouseup", function () {
//     chatMassagebox.classList.remove("dragging");
//   });
// }
// chatMassageBoxMove();
function chatScrollToBottom() {
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
chatScrollToBottom();
function chatMassageInputMassgese() {
  var chatMassageDate = new Date();

  chatMassageDate = chatMassageDate.toLocaleTimeString([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  chatMassageBtnSend.addEventListener("click", function (e) {
    e.preventDefault();
    if (chatMassageInput.value !== "") {
      var newMassageElement = document.createElement("div");
      newMassageElement.classList.add("massage", "me");
      newMassageElement.innerHTML = ` <div
  class="chat-massages w-100 py-1 d-flex flex-column justify-content-center align-items-center"
>
  <div
    class="massege w-100 d-flex flex-row justify-content-start align-items-center gap-3 px-2 py-2"
  >
    <div
      class="d-flex flex-column justify-content-center align-items-end w-100 gap-2"
    >
      <span
        class="massege-text me bg-primary text-light py-2 px-3 rounded-2"
      >
      ${chatMassageInput.value}
      </span><span class="chat-massages-time me">${chatMassageDate} <i class="bi bi-check-lg"></i></span></div></div></div>`;
      chatHistory.appendChild(newMassageElement);
      localStorage.setItem(
        "chat",
        JSON.stringify(chatMassageInput.value, chatMassageDate)
      );
      chatMassageInput.value = "";
      chatScrollToBottom();
    } else {
      chatMassageInput.style.border = "1px solid red";
    }
  });
}

chatMassageInputMassgese();
var chatcontactmassage = document.querySelectorAll(".chat-contact-massage");
var newMassege = document.querySelector(".new-massege");
var chatMassageOffcanvas = document.querySelector(".offcanvas-end");
function chatMassageMaximum() {
  chatOffCanvasCloseBtn.addEventListener("click", function () {
    chatMassagebox.style.display = "none";
  });

  for (var a = 0; a <= chatContacLi.length; a++) {
    chatContacLi[0].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/07.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[0].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[0].innerHTML;
    });
    chatContacLi[1].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/02.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[1].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[1].innerHTML;
    });
    chatContacLi[2].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/placeholder.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[2].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[2].innerHTML;
    });
    chatContacLi[3].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/04.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[3].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[3].innerHTML;
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
      newMassege.innerHTML = chatcontactmassage[4].innerHTML;
    });
    chatContacLi[5].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/06.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[5].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[5].innerHTML;
    });
    chatContacLi[6].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/group-img.avif";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[6].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[6].innerHTML;
    });
    chatContacLi[7].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/08.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[7].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[7].innerHTML;
    });
    chatContacLi[8].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/09.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[8].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[8].innerHTML;
    });
    chatContacLi[9].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/10.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[9].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[9].innerHTML;
    });
    chatContacLi[10].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/11.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[10].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[10].innerHTML;
    });
    chatContacLi[11].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.src = "Avatar/12.jpg";
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[11].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[11].innerHTML;
    });
    break;
  }
  for (var b = 0; b <= chatContactDp.length; b++) {}
  for (var c = 0; c <= chatContactName.length; c++) {}
  for (var d = 0; d < chatcontactmassage.length; d++) {}

  chatContacLi.forEach(function (s) {
    s.addEventListener("click", function () {
      chatScrollToBottom();
    });
  });
  if (window.matchMedia("(max-width: 500px)").matches) {
    chatContacLi.forEach(function (s) {
      s.addEventListener("click", function () {
        s.setAttribute("data-bs-dismiss", "offcanvas");
      });
    });
  }
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

var navbarNotificationClear = document.querySelector(
  ".navbar-notification-clear"
);
var dropdownItemNotification = document.querySelectorAll(
  ".dropdown-item.notification"
);
var dropdownRight1 = document.querySelector("#navbar-dropdown-right");
var navbarNotificationNew = document.querySelector(".navbar-notification-new");
var header = document.querySelector("header");
navbarNotificationClear.addEventListener("click", function () {
  dropdownItemNotification.forEach(function (f) {
    f.style.display = "none";
    navbarNotificationNew.innerHTML = "0";
    dropdownRight1.style.height = "max-content";
  });
});

// var rootColor = document.querySelector(":root");

// var darkModeBtn = document.querySelector(".dark-mode-btn");
// darkModeBtn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#191a1f";
//   document.body.style.color = "#fff";
//   header.style.backgroundColor = "#0f0f10";
// });
