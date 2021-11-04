let allBtnTab = document.querySelectorAll(".section-btn-tab button"),
  arraybtnTab = Array.from(allBtnTab),
  allForms = document.querySelectorAll(".cont-forms form"),
  arrayAllForms = Array.from(allForms);

// Start Section Tab Form
arraybtnTab.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    arraybtnTab.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    arrayAllForms.forEach((formSection) => {
      formSection.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
  });
});
// End Section Tab Form
