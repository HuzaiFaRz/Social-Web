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
function chatbox() {
  chatOffCanvasCloseBtn.addEventListener("click", function () {
    chatMassagebox.style.display = "none";
  });

  for (var a = 0; a <= chatContacLi.length; a++) {
    chatContacLi[0].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/07.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[0].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[0].innerHTML;
    });

    chatContacLi[1].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/02.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[1].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[1].innerHTML;
    });
    chatContacLi[2].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/placeholder.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[2].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[2].innerHTML;
    });

    chatContacLi[3].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/04.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[3].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[3].innerHTML;
    });
    chatContacLi[4].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/05.jpg");
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
        z.setAttribute("src", "Avatar/06.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[5].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[5].innerHTML;
    });
    chatContacLi[6].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/group-img.avif");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[6].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[6].innerHTML;
    });
    chatContacLi[7].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/08.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[7].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[7].innerHTML;
    });
    chatContacLi[8].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/09.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[8].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[8].innerHTML;
    });
    chatContacLi[9].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/10.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[9].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[9].innerHTML;
    });
    chatContacLi[10].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/11.jpg");
      });
      chatContactMassageName.forEach(function (x) {
        x.innerHTML = chatContactName[10].innerHTML;
      });
      newMassege.innerHTML = chatcontactmassage[10].innerHTML;
    });
    chatContacLi[11].addEventListener("click", function () {
      chatMassagebox.style.display = "flex";
      chatContactMassageDp.forEach(function (z) {
        z.setAttribute("src", "Avatar/12.jpg");
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
}

chatbox();

chatContacLi.forEach(function (s) {
  s.addEventListener("click", function () {
    chatScrollToBottom();
  });
});

// function updateChatContactAttributes() {
//   chatContacLi.forEach(function (s) {
//     if (window.matchMedia("(max-width: 500px)").matches) {
//       s.setAttribute("data-bs-dismiss", "offcanvas");
//     } else {
//       s.removeAttribute("data-bs-dismiss", "offcanvas");
//     }
//   });
// }
// updateChatContactAttributes();

// window.addEventListener("resize", updateChatContactAttributes);

// for (var f = 0; f < chatContacLi.length; f++) {
//   chatContacLi[f].addEventListener("click", function () {
//     chatContacLi[f].setAttribute("data-bs-dismiss", "offcanvas");
//   });
// }

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

var storiesCell = document.querySelectorAll(".story-slider-cell");
var storySliderImg = document.querySelectorAll(".story-slider-img");
var storyName = document.querySelectorAll(".story-name");
var story = document.querySelector(".story");
var storyCloseBtn = document.querySelector(".story-close-btn");
var storyImg = document.querySelector(".story-img");

var storyTime = document.querySelector(".story-time ");
var storyTimeLenght = document.querySelector(".story-time-lenght");
var storyStoryImg = document.querySelector(".story-story-profile");
var storyStoryName = document.querySelector(".story-story-name");
var storyStoryTime = document.querySelector(".story-story-time");

function homeStories() {
  for (var r = 0; r < storiesCell.length; r++) {
    storiesCell[0].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[0].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[0].src);
      storyStoryTime.textContent = 2 + " hour";
      storyImg.setAttribute("src", "Post/Story/01.jpg");
    });

    storiesCell[1].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[1].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[1].src);
      storyStoryTime.textContent = 3 + " hour";
      storyImg.setAttribute("src", "Post/Story/02.jpg");
    });

    storiesCell[2].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[2].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[2].src);
      storyStoryTime.textContent = 7 + " hour";
      storyImg.setAttribute("src", "Post/Story/03.jpg");
    });

    storiesCell[3].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[3].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[3].src);
      storyStoryTime.textContent = 4 + " hour";
      storyImg.setAttribute("src", "Post/Story/04.jpg");
    });

    storiesCell[4].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[4].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[4].src);
      storyStoryTime.textContent = 2 + " hour";
      storyImg.setAttribute("src", "Post/Story/05.jpg");
    });

    storiesCell[5].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[5].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[5].src);
      storyStoryTime.textContent = 7 + " hour";
      storyImg.setAttribute("src", "Post/Story/06.jpg");
    });

    storiesCell[6].addEventListener("click", function () {
      showStory();
      storyStoryName.textContent = storyName[6].textContent;
      storyStoryImg.setAttribute("src", storySliderImg[6].src);
      storyStoryTime.textContent = 8 + " hour";
      storyImg.setAttribute("src", "Post/Story/07.jpg");
    });
  }
  // var storyanimationtime = null;

  function showStory() {
    story.style.transition = "all 0.3s linear";
    story.style.zIndex = "100000";
    story.style.visibility = "visible";
    story.style.opacity = "1";
    story.style.transform = "rotate(0deg)";
    storyTimeLenght.style.animation = "storytimeani 5s both 0s 1 linear";
    document.body.style.overflow = "hidden";
  }

  storyTimeLenght.addEventListener("animationend", function () {
    hideStory();
  });

  function hideStory() {
    story.style.transition = "all 0.3s linear";
    story.style.zIndex = "-11111";
    story.style.visibility = "hidden";
    story.style.opacity = "0";
    story.style.transform = "rotate(60deg)";
    storyTimeLenght.style.animation = false;
    document.body.style.overflow = "auto";
  }

  storyCloseBtn.addEventListener("click", function () {
    hideStory();
  });

  // for (var w = 0; w < storyName.length; w++) {
  //   console.log(storyName[w]);
  // }

  // for (var g = 0; g < storySliderImg.length; g++) {
  //   console.log(storySliderImg[g]);
  // }
  // var homeStoryTimeCurrentInt = null;
  // setTimeout(hideStory())
  // var homeStoryTimeCurrentInt = setTimeout(function () {
  //   hideStory();
  // }, 6000);
  // console.log(homeStoryTimeCurrentInt);
  // storyImg.src = `Post/Story/0${index + 1}.jpg`;
  // storyStoryName.textContent = storyName[index].innerHTML;
  // storyStoryImg.src = storySliderImg[index].src;
  // storyStoryTime.textContent = `${(index + 2) * 2} Hour ago`;
  // var homeStoryTimeCurrentInt = clearTimeout(function () {
  //   hideStory();
  // }, 6000);
  // console.log(homeStoryTimeCurrentInt);
  // storyImg.src = `Post/Story/0${index + 1}.jpg`;
  // storyStoryName.textContent = storyName[index].innerHTML;
  // storyStoryImg.src = storySliderImg[index].src;
  // storyStoryTime.textContent = `${(index + 2) * 2} Hour ago`;
  // function showStory(index) {
  //   if (homeStoryTimeCurrentInt) {
  //     clearInterval(homeStoryTimeCurrentInt);
  //   }
  //   story.style.transition = "all 0.3s linear";
  //   story.style.zIndex = "1000000000";
  //   story.style.opacity = "1";
  //   story.style.visibility = "visible";
  //   story.style.transform = "rotate(0deg)";
  //   storyImg.src = `Post/Story/0${index + 1}.jpg`;
  //   storyTimeLenght.style.animation = " storytimeani 5s both 0s 1 linear";
  //   storyStoryName.textContent = storyName[index].innerHTML;
  //   storyStoryImg.setAttribute("src",storySliderImg[index]).src;
  //   storyStoryTime.textContent = `${(index + 2) * 2} Hour ago`;
  //   document.body.style.overflow = "hidden";
  //   homeStoryTimeCurrentInt = setInterval(function () {
  //     hideStory();
  //   }, 7000);
  // }
  // function hideStory() {
  //   story.style.transition = "all 0.3s linear";
  //   story.style.zIndex = "0";
  //   story.style.opacity = "0";
  //   story.style.visibility = "hidden";
  //   story.style.transform = "rotate(-60deg)";
  //   document.body.style.overflow = "auto";
  //   storyTimeLenght.style.animation = null;
  //   if (homeStoryTimeCurrentInt) {
  //     clearInterval(homeStoryTimeCurrentInt);
  //     homeStoryTimeCurrentInt = null;
  //   }
  // }

  // for (var o = 0; o < storiesCell.length; o++) {
  //   storiesCell[o].addEventListener(
  //     "click",
  //     (function (index) {
  //       return function () {
  //         showStory(index);
  //       };
  //     })(o)
  //   );
  // }
}

homeStories();

var homeShareBtns = document.querySelectorAll(".home-share-modal-btn");
var homeModalCancelBtn = document.querySelector(".modal-close-btn");
var homeModalFileUploadContent = document.querySelector(".file-drag-para");
var modalTittle = document.querySelector(".modal-title");
var modalFileUpload = document.querySelector(".modal-file-upload");
var modalPostShareTextarea = document.querySelector(
  ".modal-post-share-textarea"
);
var fileDargIcon = document.querySelector(".file-darg-icon");
var modalFooter = document.querySelector(".modal-footer");

for (var u = 0; u <= homeShareBtns.length; u++) {
  homeShareBtns[0].addEventListener("click", function () {
    modalTittle.textContent = "Add post photo";
    fileDargIcon.classList.replace("bi-camera-reels", "bi-images");
    homeModalFileUploadContent.textContent =
      "Drag here or click to upload photo.";
    homeModalCancelBtn.textContent = "Cancel";
    homeModalCancelBtn.classList.remove("bi-camera-video-fill");
    modalFooter.innerHTML = `<div class="d-flex flex-row justify-content-center align-items-center gap-2"><button class="bg-danger bg-opacity-10 text-danger border-0 px-3 py-2 rounded-2 modal-close-btn" data-bs-dismiss="modal">Cancel</button><button class="bg-success bg-opacity-10 text-success border-0 px-3 py-2 rounded-2 modal-post-btn">Post</button></div>
      `;
  });

  homeShareBtns[1].addEventListener("click", function () {
    modalTittle.textContent = "Add post video";
    fileDargIcon.classList.replace("bi-images", "bi-camera-reels");
    homeModalFileUploadContent.textContent =
      "Drag here or click to upload video.";
    modalFooter.innerHTML = `<div class="d-flex flex-row justify-content-center align-items-center gap-2"><button class="bg-danger bg-opacity-10 text-danger border-0 px-3 py-2 rounded-2 modal-close-btn-2 bi bi-camera-video-fill d-flex flex-wrap justify-content-center align-items-center gap-1">Live video</button><button class="bg-success bg-opacity-10 text-success border-0 px-3 py-2 rounded-2 modal-post-btn">Post</button></div>
      `;
  });
}
var customCallendar = document.querySelectorAll(".flatpickr");

for (var g = 0; g <= customCallendar.length; g++) {
  customCallendar[0].flatpickr({
    dateFormat: "D-m-Y",
  });
  customCallendar[1].flatpickr({
    dateFormat: "D-m-Y",
    noCalendar: true,
    enableTime: true,
  });
}

var img = document.querySelectorAll("img");

img.forEach(function (i) {
  i.addEventListener("error", function () {
    i.style.opacity = "0";
  });
});

var reloadContainer = document.querySelector(".reload-container");
var reloadBtn = document.querySelector(".reload-btn");
var reloadBtnSpinner = document.querySelector(".reload-btn-spinner");
var spinnerDot1 = document.querySelector(".spinner-dot-1");
var spinnerDot2 = document.querySelector(".spinner-dot-2");
var spinnerDot3 = document.querySelector(".spinner-dot-3");

function reloadContainerAnimation() {
  reloadContainer.style.transition = "all 0.5s linear";
  reloadBtn.style.transform = "translateZ(42px)";
  reloadBtnSpinner.classList.remove("spinner-border");
  spinnerDot1.style.animation = false;
  spinnerDot2.style.animation = false;
  spinnerDot3.style.animation = false;
  reloadBtn.style.opacity = "0";
  reloadContainer.style.zIndex = "-99999";
  reloadContainer.style.opacity = "0";
  reloadContainer.style.visibility = "hidden";
}
var reloadcontainer = document.querySelector(".reload-container");
reloadcontainer.addEventListener("animationend", function () {
  reloadContainerAnimation();
});

// window.addEventListener("load", function () {
//   document.body.style.overflowY = "hidden";
//   setTimeout(function () {
//     reloadContainerAnimation();
//     document.body.style.overflowY = "auto";
//   }, 3000);
// });

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

var postQuestion = document.querySelectorAll(".post-question");

postQuestion.forEach(function (v) {
  v.addEventListener("click", function () {
    document
      .querySelector(".post-question-active")
      ?.classList.remove("post-question-active");

    v.classList.add("post-question-active");
  });
});
const player = new Plyr("#player");

var loadingPostBtn = document.querySelector(".loading-post-btn");

loadingPostBtn.addEventListener("click", function () {
  loadingPostBtn.classList.toggle("loadingPostBtnActive");
  if (loadingPostBtn.classList.contains("loadingPostBtnActive")) {
    loadingPostBtn.innerHTML = `<div class="spinner-grow" role="status"></div>`;
  } else {
    loadingPostBtn.innerHTML = `<span>Load More</span>`;
  }
});
// function chatMassageBoxMove() {
//   chatMassagebox.addEventListener("mousedown", function (e) {
//     chatMassagebox.classList.add("dragging");
//   });
//   document.addEventListener("mousemove", function (e) {
//     if (chatMassagebox.classList.contains("dragging")) {
//       // gsap.to(chatMassagebox, {
//       //   y: dets.y,
//       //   x: dets.x,
//       //   duration:.1
//       // });

//       chatMassagebox.style.top = e.clientY + "px";
//       chatMassagebox.style.left = e.clientX + "px";
//     }
//   });
//   document.addEventListener("mouseup", function () {
//     chatMassagebox.classList.remove("dragging");
//   });
// }
// chatMassageBoxMove();
