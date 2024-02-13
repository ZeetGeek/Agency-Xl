const hamburger_menu = document.querySelector(".hamburger_menu");
const hamburger_menu_icon = document.querySelector("#hamburger_menu_icon");
const sidebar = document.querySelector(".sidebar");

hamburger_menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    hamburger_menu_icon.classList.toggle("iconoir-menu");
    hamburger_menu_icon.classList.toggle("iconoir-xmark");
});

const sidebarLinks = document.querySelectorAll(".sidebar-link");
const sections = document.querySelectorAll(".section");
const mainContent = document.querySelector(".page-content");

sidebarLinks.forEach((link) =>
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        hamburger_menu_icon.classList.toggle("iconoir-menu");
        hamburger_menu_icon.classList.toggle("iconoir-xmark");
    })
);

mainContent.addEventListener("scroll", function () {
    let currentScroll = mainContent.scrollTop;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (currentScroll >= sectionTop - sectionHeight * 0.25 && currentScroll < sectionTop + sectionHeight - sectionHeight * 0.25) {
            sidebarLinks.forEach((link) => link.classList.remove("link-active"));
            sidebarLinks[index].classList.add("link-active");
        }
    });
});
