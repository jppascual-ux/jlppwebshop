document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Switcher Logic
    // Persists the dark/light mode toggle across the site
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeSwitcher.innerText = document.body.classList.contains('dark-theme') ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    // 2. Asynchronous Data Simulation
    // Utility function to simulate fetching external data
    function fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ message: "Data fetched successfully!" });
            }, 2000);
        });
    }

    async function displayData() {
        console.log("Fetching data...");
        try {
            const data = await fetchData();
            console.log("Success:", data.message);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    displayData();

    // 3. Checkout & Payment Logic (Async/Await) (Added cause of January 26 activity that required to add one JS from the lesson)
    // Simulates a secure payment gateway response
    const processPayment = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 200, message: "Payment Captured!" });
            }, 2500); // 2.5 second delay to simulate network latency
        });
    };

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('pay-btn');
            
            // Visual feedback during processing
            btn.innerText = "Verifying Transaction...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            try {
                const response = await processPayment();
                console.log(response.message);
                alert("Order placed successfully! Redirecting to receipt...");
                window.location.href = 'receipt.html';
            } catch (error) {
                alert("Transaction failed. Please try again.");
                btn.innerText = "Confirm Order";
                btn.disabled = false;
            }
        });
    }

    // 4. Standard Form Handlers
    // Handles contact, signup, and login form submissions
    const setupForm = (formId, successMsg, redirectUrl) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(successMsg);
                if (redirectUrl) window.location.href = redirectUrl;
                form.reset();
            });
        }
    };

    setupForm('contact-form', 'Message sent to Gym Leader Jo!');
    setupForm('signup-form', 'Account created! Please login.', 'login.html');
    setupForm('login-form', 'Login successful! Welcome back.', 'profile.html');
});