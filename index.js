const sidebarEl = document.querySelector(".sidebar");
const menuEl = document.querySelector(".hamburger");
const closeMenuEl = document.querySelector(".close-menu");
console.log(sidebarEl);
console.log(menuEl);

menuEl.addEventListener("click", () => {
    sidebarEl.style.display = "block";
})

closeMenuEl.addEventListener("click", () => {
    sidebarEl.style.display = "none"
})