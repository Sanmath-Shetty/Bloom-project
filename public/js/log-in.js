const loginForm = document.getElementById('logInForm');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('logInUsername').value;
    const password = document.getElementById('logInPassword').value;

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      alert(data.message || data.error);

      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        window.location.href = 'index.html';
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  });