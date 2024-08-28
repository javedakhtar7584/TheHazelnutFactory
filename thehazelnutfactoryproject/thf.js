 document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const orderForm = document.querySelector('form[action="/submit-order"]');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const product = document.getElementById('product').value;
            const quantity = document.getElementById('quantity').value;

            if (!name || !email || !phone || !address || !product || quantity <= 0) {
                alert('Please fill out all fields correctly.');
                return;
            }

            alert('Order submitted successfully!');
            orderForm.reset();
        });
    }
});
