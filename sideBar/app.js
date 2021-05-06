const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //     toggleBtn.classList.remove("sidebar-toggle");
  //   }
  sidebar.classList.toggle("show-sidebar");
  toggleBtn.classList.toggle("sidebar-toggle");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  toggleBtn.classList.add("sidebar-toggle");
});
