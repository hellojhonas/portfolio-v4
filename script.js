const seeMoreBtn = document.getElementById("see-more-btn");
const seeLessBtn = document.getElementById("see-less-btn");
const otherPrjsRow = document.querySelector(".other-prjs");

seeMoreBtn.addEventListener("click", () => {
  otherPrjsRow.classList.remove("d-none");
  seeMoreBtn.classList.add("d-none");
  seeLessBtn.classList.remove("d-none");
});

seeLessBtn.addEventListener("click", () => {
  otherPrjsRow.classList.add("d-none");
  seeMoreBtn.classList.remove("d-none");
  seeLessBtn.classList.add("d-none");
});

const button = document.getElementById("download-resume");
const url = "./assets/JhonBrandonAcenas-WebDeveloper.pdf";
button.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "JhonBrandonAcenas-WebDeveloper.pdf";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function sendEmail() {
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=jhonacenas0704@gmail.com";
    var win = window.open(url, "_blank");
    win.focus();
}

