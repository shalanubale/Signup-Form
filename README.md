<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Signup Form - Secure and responsive user registration.">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
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
        <p>Gender:</p>
        <label><input type="radio" name="gender" value="male" required /> Male</label>
        <label><input type="radio" name="gender" value="female" required /> Female</label>
        <label><input type="radio" name="gender" value="other" required /> Other</label>
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

  <script src="script.js"></script>
</body>
</html>
