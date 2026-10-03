document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    const counterKey = "reviewsCompletedCount";
    let currentCount = localStorage.getItem(counterKey);

    if (currentCount === null) {
        currentCount = 0;
    } else {
        currentCount = parseInt(currentCount, 10);
    }

    currentCount += 1;
    localStorage.setItem(counterKey, currentCount);

    const counterElement = document.getElementById("review-counter");
    if (counterElement) {
        counterElement.textContent = currentCount;
    }
});
