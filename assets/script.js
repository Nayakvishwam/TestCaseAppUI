document.getElementById("btnmenu")?.addEventListener("click", () => {
    const smallmenu = document.getElementById("smallmenu");
    if (smallmenu.className.includes(" hidden")) {
        smallmenu.classList.remove("hidden");
        smallmenu.classList.add("flex");
    } else {
        smallmenu.classList.remove("flex");
        smallmenu.classList.add("hidden");
    }
    // smallmenu.classList.toggle("hidden");
});