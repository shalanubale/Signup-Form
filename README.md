<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Signup Form - Secure and responsive user registration.">
  <link rel="icon" href="favicon.ico">

  <!-- Embedded CSS -->
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f7f8;
      margin: 0;
      padding: 0;
    }

    header, main, footer {
      max-width: 600px;
      margin: auto;
      background: #fff;
      padding: 20px;
      margin-top: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    h1 {
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      color: #555;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      margin-bottom: 5px;
      display: block;
      font-weight: bold;
    }

    input[type="email"],
    input[type="password"],
    input[type="date"] {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    .form-group input[type="radio"],
    .form-group input[type="checkbox"] {
      margin-right: 8px;
    }

    .error-message {
      color: red;
      font-size: 0.85em;
      margin-top: 5px;
    }

    button {
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #0056b3;
    }

    #formMessage {
      margin-top: 15px;
      font-weight: bold;
      text-align: center;
    }

    @media (max-width: 600px) {
      header, main, footer {
        margin: 10px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Create Your Account</h1>
    <p>Please fill in the form below to sign up.</p>
  </header>

  <main>
    <form id="signupForm" novalidate>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <span class="error-message" id="emailError"></span>
      </div>

      <div class="form-group">
        <label for="password">Password (min 8 characters):</label>
        <input type="password" id="password" name="password" required minlength="8" />
        <span class="error-message" id="passwordError"></span>
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <span class="error-message" id="confirmPasswordError"></span>
      </div>

      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
      </div>

      <div class="form-group">
        <label><input type="radio" id="sudent" name="designation" value="student" required /> Student</label>
        <br>
        <label><input type="radio" id="employee" name="designation" value="employee" required />Employee </label>
        </div>

      <div class="form-group">
        <label><input type="checkbox" name="terms" required /> I agree to the Terms and Conditions</label>
      </div>

      <button type="submit">Sign Up</button>
      <div id="formMessage" role="alert"></div>
    </form>
  </main>

  <footer>
    <p>&copy; 2025 Your Company. All rights reserved.</p>
  </footer>

  <!-- Embedded JavaScript -->
  <script>
    document.getElementById('signupForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirm-password');
      const formMessage = document.getElementById('formMessage');

      let isValid = true;

      // Reset messages
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';
      document.getElementById('confirmPasswordError').textContent = '';
      formMessage.textContent = '';

      // Email validation
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
      }

      // Password validation
      if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
      }

      // Confirm password match
      if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
      }

      // Final result
      if (isValid) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Form submitted successfully!';
        // Optionally reset the form: this.reset();
      } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please correct the highlighted errors.';
      }
    });
  </script>
</body>
</html>
