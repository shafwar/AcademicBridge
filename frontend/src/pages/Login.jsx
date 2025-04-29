import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  
  // Efek fade-in saat komponen dimuat
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!username || !password) {
      setError('Username dan password harus diisi');
      return;
    }
    
    // Set loading state
    setLoading(true);
    
    // Simulasi delay untuk animasi loading
    setTimeout(async () => {
      // Untuk demo/pengujian (tanpa API)
      if (username === '24060122140185' && password === 'password123') {
        // Simpan info login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({
          name: 'Naufal Shafi Anwar',
          nim: '24060122140185',
          prodi: 'Informatika S1'
        }));
        
        // Redirect ke dashboard dengan efek fadeout
        setFadeIn(false);
        setTimeout(() => {
          navigate('/mahasiswa/dashboard');
        }, 300);
        
        return;
      }
      
      // Simulasikan login error jika kredensial tidak cocok
      setError('Username atau password salah');
      setLoading(false);
      
      /* Uncomment ini jika API backend sudah siap
      try {
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', data.token);
          
          // Redirect ke dashboard dengan efek fadeout
          setFadeIn(false);
          setTimeout(() => {
            navigate('/mahasiswa/dashboard');
          }, 300);
        } else {
          setError(data.message || 'Username atau password salah');
          setLoading(false);
        }
      } catch (err) {
        console.error('Login error:', err);
        setError('Terjadi kesalahan saat login. Silakan coba lagi.');
        setLoading(false);
      }
      */
    }, 800); // Delay untuk efek loading
  };

  return (
    <div className={`login-page ${fadeIn ? 'fade-in' : 'fade-out'}`} onClick={(e) => e.stopPropagation()}>
      <div className="login-card">
        <div className="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/2/2d/Undip.png"
            alt="Logo UNDIP"
            className="university-logo"
          />
        </div>
        <h1 className="app-title">MAHASIGMA</h1>
        <h2 className="university-name">Universitas Diponegoro</h2>
        
        <div className="login-divider">
          <p>Silahkan Masuk</p>
        </div>
        
        {error && (
          <div className="error-message">
            <i className="error-icon">⚠️</i>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <div className="input-with-icon">
              <i className="input-icon">👤</i>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="NIM/NIP/username/e-mail official Undip"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="input-field"
                autoComplete="username"
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <i className="input-icon">🔒</i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="input-field"
                autoComplete="current-password"
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="login-hint">
            <p>Demo credentials: 24060122140185 / password123</p>
          </div>
          
          <button 
            type="submit" 
            className={`login-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-text">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            ) : 'Login'}
          </button>
        </form>
        
        <div className="footer-text">
          © {new Date().getFullYear()} SIGMA - Universitas Diponegoro
        </div>
      </div>
    </div>
  );
}

export default Login;