const light = document.getElementById("light");
const toggleButton = document.getElementById("toggleButton");
let isLightOn = false;

function updateLight(e) {
    if (isLightOn) {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
    }
}

toggleButton.addEventListener("click", () => {
    isLightOn = !isLightOn;
    if (isLightOn) {
        light.style.display = "block";
        toggleButton.textContent = "Chiroqni o'chirish";
        document.addEventListener("mousemove", updateLight);
    } else {
        light.style.display = "none";
        toggleButton.textContent = "Chiroqni yoqish";
        document.removeEventListener("mousemove", updateLight);
    }
});