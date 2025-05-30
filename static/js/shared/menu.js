document.addEventListener("DOMContentLoaded", function () 
{
    const toggleButton = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");

    toggleButton.addEventListener("click", function () 
    {
        sideMenu.classList.toggle("open");
    });

    // Handle toggling submenus
    document.querySelectorAll(".submenu-toggle").forEach(toggle => 
    {
        toggle.addEventListener("click", function (e) 
        {
            e.preventDefault(); // Prevent actual link behavior
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("open");
        });
    });

    // Optional: Close menu when clicking a leaf link
    sideMenu.querySelectorAll(".side-menu a[href]").forEach(link => 
    {
        link.addEventListener("click", () => 
        {
            sideMenu.classList.remove("open");
        });
    });
});
