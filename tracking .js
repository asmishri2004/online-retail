document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    const orderDetails = document.getElementById('orderDetails');

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const orderNumber = document.getElementById('orderNumber').value;

        // Make an AJAX request to your backend to retrieve order details
        // Example: fetch('/api/orders/' + orderNumber)
        // Handle the response and display order details in the orderDetails div
        // Example: orderDetails.innerHTML = 'Order Details: ' + JSON.stringify(responseData);
    });
});
