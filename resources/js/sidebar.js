    let sidebar = document.getElementById("sidebar");
    let closeSidebar = document.getElementById("closeSidebar");
    let openSidebar = document.getElementById("openSidebar");

    closeSidebar.addEventListener("click", function () {
        sidebar.style.display = "none";
        openSidebar.style.display = "flex";
    });

    openSidebar.addEventListener("click", function() {
        sidebar.style.display = "flex";
        openSidebar.style.display = "none";
    });
