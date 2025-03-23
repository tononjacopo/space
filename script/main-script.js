// Proximity Hover Effect
// Get the image from the DOM
const img = document.querySelector(".img");
const header = document.querySelector("#viewport-hero");

// Get half of the width and height of the browser window
const x = window.innerWidth / 2;
const y = window.innerHeight / 2;

/* Max image brightness */
const intensity = 120;

header.addEventListener("mousemove", (e) => {
    // Calculate the distance from the center
    const distanceX = e.clientX - x;
    const distanceY = e.clientY - y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Calculate the maximum possible distance (from center to any corner)
    const maxDistance = Math.sqrt(x * x + y * y);

    // Calculate the brightness based on the distance
    let brightness = (1 - distance / maxDistance) * intensity;

    // Ensure the brightness stays within the bounds
    if (brightness < 0) brightness = 0;
    if (brightness > intensity) brightness = intensity;

    // Set final calculation to image brightness
    img.style.filter = `brightness(${brightness}%)`;
});

/*burgher menu*/
function toggleBurgerMenu() {
    const burgerMenuIcon = document.getElementById('burger-menu-icon');
    const linkNavContainer = document.getElementById('link-nav-container');

    if (burgerMenuIcon.classList.contains('open')) {
        burgerMenuIcon.classList.remove('open');
        linkNavContainer.style.display = 'none';
    } else {
        burgerMenuIcon.classList.add('open');
        linkNavContainer.style.display = 'block';
    }
}