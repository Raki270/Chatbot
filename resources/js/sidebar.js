let sidebar = document.getElementById("sidebar");
let closeSidebar = document.getElementById("closeSidebar");
let openSidebar = document.getElementById("openSidebar");

closeSidebar.addEventListener("click", function () {
    sidebar.style.transition = "transform 0.4s ease-in-out"; // Smooth transition
    sidebar.style.transform = "translateX(-100%)"; // Slide out to the left

    setTimeout(() => {
        sidebar.style.display = "none"; // Hide the sidebar
    }, 400); // Wait for the transition to complete

    openSidebar.style.display = "flex"; // Show the open sidebar button
});

openSidebar.addEventListener("click", function() {
    sidebar.style.display = "flex"; // Show the sidebar
    sidebar.style.transition = "transform 0.4s ease-in-out"; // Smooth transition
    sidebar.style.transform = "translateX(0)"; // Slide in from the left

    setTimeout(() => {
        openSidebar.style.display = "none"; // Hide the open sidebar button
    }, 400); // Wait for the transition to complete
});
