const boxes = document.querySelectorAll(".box");
const totalPrice = document.getElementById("total-price");
const addToCartBtn = document.querySelector(".add-to-cart");

let selectedPrice = 18; // Default to 2 Units price

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Remove expanded class from all boxes
        boxes.forEach((b) => b.classList.remove("expanded"));

        // Add expanded class to clicked box
        box.classList.add("expanded");

        // Update price dynamically
        const priceText = box.querySelector(".label");
        if (priceText) {
            selectedPrice = parseFloat(priceText.textContent.replace("$", ""));
            totalPrice.textContent = `$${selectedPrice.toFixed(2)} USD`;
        }
    });
});

// Select all boxes with the class "box"
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', () => {
        // Find the radio input inside the clicked box
        const radioInput = box.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }
    });
});

// Simulate Add to Cart Functionality
addToCartBtn.addEventListener("click", () => {
    alert(`Added to Cart! Total Price: $${selectedPrice.toFixed(2)} USD`);
});
