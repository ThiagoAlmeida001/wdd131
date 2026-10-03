document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 4.7 },
      { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById("product-select");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
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
