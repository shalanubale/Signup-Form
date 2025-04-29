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
    // Here you could submit the form or send data via fetch/AJAX
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please correct the highlighted errors.';
  }
});
