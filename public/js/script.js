const logoutLink = document.getElementById('logoutLink');
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');

if (logoutLink) {
  const token = localStorage.getItem('token');

  if (token) {
    loginLink.style.display = 'none';
    signupLink.style.display = 'none';
    logoutLink.style.display = 'inline-block';
  } else {
    loginLink.style.display = 'inline-block';
    signupLink.style.display = 'inline-block';
    logoutLink.style.display = 'none';
  }

  logoutLink.addEventListener('click', () => {
    localStorage.removeItem('token');
    alert('Logged out!');
    window.location.reload();
  });
}
