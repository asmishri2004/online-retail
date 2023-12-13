
// Example: Show the cart review step and hide others
function showCartReviewStep() {
    document.getElementById('cartReview').style.display = 'block';
    document.getElementById('userInfo').style.display = 'none';
    // Hide other steps
}

// Add event listeners and logic for moving between steps, form validation, etc.

// Example: Move to the user information step
document.getElementById('nextToUserInfo').addEventListener('click', () => {
    // Add form validation logic here if needed
    showUserInfoStep();
});
// checkout.js
function showPaymentButton(paymentMethod) {
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    const proceedButton = document.getElementById('proceedButton');

    if (paymentMethod === 'gpay' || paymentMethod === 'upi') {
        cardPaymentForm.style.display = 'none'; // Hide card payment form
        proceedButton.style.display = 'block'; // Show proceed button
    } else {
        cardPaymentForm.style.display = 'block'; // Show card payment form
        proceedButton.style.display = 'none'; // Hide proceed button
    }
}

function processCardPayment() {
    // Implement card payment processing logic here
}

function proceedPayment() {
    // Implement logic to proceed with GPay or UPI payment here
}
// checkout.js
// checkout.js
let paymentModal;

// checkout.js
let paymentModal;

function showPaymentModal(paymentMethod) {
    if (paymentMethod === 'gpay') {
        // Redirect to Google Pay (GPay) page
        window.location.href = 'gpay.html';
    } else if (paymentMethod === 'upi') {
        // Create a modal dialog for UPI ID entry
        paymentModal = document.createElement('div');
        paymentModal.id = 'paymentModal';
        paymentModal.innerHTML = `
            <div class="modal-content">
                <h2>Enter your UPI ID</h2>
                <input type="text" id="upiIdInput" placeholder="Your UPI ID">
                <button onclick="submitUPI()">Submit</button>
            </div>
        `;

        // Add the modal to the document
        document.body.appendChild(paymentModal);
    }
}

function submitUPI() {
    // Get the entered UPI ID
    const upiId = document.getElementById('upiIdInput').value;

    // Validate the UPI ID (you can add your validation logic here)
    if (upiId.trim() === '') {
        alert('Please enter a valid UPI ID.');
    } else {
        // Redirect to the payment.html page with UPI ID as a query parameter
        window.location.href = `payment.html?upiId=${encodeURIComponent(upiId)}`;
    }
}



