const temp = 22;
const windSpeed = 12;

const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("wind-chill-value");
    
    if (temp <= 10 && windSpeed > 4.8) {
        const factor = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${factor.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
