<h1>🔐 Login & Signup Page (with Local Storage, Validation)</h1> 


This project is a Login and Signup System built entirely using pure HTML, CSS, and JavaScript — without any external frameworks.
It allows users to create an account, store their details securely in the browser’s Local Storage, and log in using the saved credentials.
The design is simple, clean, and fully responsive, offering a smooth user experience with real-time input validation and alert messages.

🚀 Features

✅ Signup Page

User can register with Name, Email, Password, and Confirm Password.

Input fields include real-time validation (empty fields, invalid email, mismatched passwords, etc.).

All valid user data is stored in Local Storage as JSON.

Alerts are shown if any field is missing or invalid.

✅ Login Page

Users can log in with credentials saved during signup.

Checks input values against Local Storage records.

Displays an alert for invalid login attempts.

Redirects to a welcome page after successful login.

✅ Validation System

Custom JavaScript validation without external libraries.

Displays error messages dynamically below each field.

Removes error message once the user starts typing again.

✅ User Interface (UI)

Built using pure CSS with a clean, minimal, and modern layout.

Responsive design for desktop and mobile.

Includes subtle animations and hover effects for better interactivity.

🧠 Technologies Used

HTML5 – Structure and form elements

CSS3 – Styling, layout, and animations

JavaScript (ES6) – Logic, validation, and local storage handling

Local Storage API – To store and retrieve user data locally

💡 How It Works

User visits the Signup Page and enters details.

JavaScript validates inputs — if valid, the user’s data is saved to Local Storage.

On the Login Page, the system fetches stored user data.

If credentials match, the user is redirected to a welcome screen.

If not, an error alert appears asking for correct information.

![image alt](https://github.com/Hamza-Maliikk/Login_Registration_Form/blob/79c7d96af6d80bf699891b3b556113633421e681/image.png)
