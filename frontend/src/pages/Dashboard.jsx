// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Award, User, TrendingUp, Calendar, Info, Activity } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState({
    nama: 'Naufal Shafi Anwar',
    nim: '24060122140185',
    prodi: 'Informatika S1'
  });

  // Data akademik (statis untuk demo)
  const [akademikData, setAkademikData] = useState({
    dosenWali: {
      nip: "197404011999031002"
    },
    semester: {
      aktif: "Tidak ada periode aktif",
      studi: 3,
      status: "AKTIF"
    },
    prestasi: {
      ipk: 3.33,
      sksk: 39
    }
  });

  // Animation states
  const [animate, setAnimate] = useState(false);

  // Ambil data pengguna dari localStorage
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserData(user);
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
    
    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    // Hapus div "dashboard-container" dan komponen Sidebar
    <div className={`main-content ${animate ? 'animate-in' : ''}`}>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <button className="refresh-button">
            <Activity size={18} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="welcome-card">
        <div className="welcome-content">
          <h2>Selamat Datang {userData.nama}</h2>
          <p>Semester Akademik {akademikData.semester.studi} • Status: {akademikData.semester.status}</p>
        </div>
      </div>

      {/* Status Akademik Card */}
      <div className={`dashboard-card status-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.1s'}}>
        <div className="card-header">
          <Building className="card-icon" size={22} />
          <h2 className="card-title">Status Akademik</h2>
        </div>
        
        <div className="dosen-info">
          <div className="info-row">
            <User className="info-icon" size={18} />
            <div>
              <span className="info-label">Dosen wali:</span>
              <span className="nip-text">(NIP: {akademikData.dosenWali.nip})</span>
            </div>
          </div>
        </div>
        
        <div className="status-grid">
          <div className="status-item">
            <div className="status-icon-container">
              <Calendar className="status-icon" size={20} />
            </div>
            <h3>Semester Akademik Sekarang</h3>
            <p className="status-value">
              {akademikData.semester.aktif === "Tidak ada periode aktif" ? (
                <span className="inactive-status">{akademikData.semester.aktif}</span>
              ) : (
                akademikData.semester.aktif
              )}
            </p>
          </div>
          
          <div className="status-item">
            <div className="status-icon-container">
              <TrendingUp className="status-icon" size={20} />
            </div>
            <h3>Semester Studi</h3>
            <div className="status-value-container">
              <p className="status-value semester-value">{akademikData.semester.studi}</p>
            </div>
          </div>
          
          <div className="status-item">
            <div className="status-icon-container">
              <Info className="status-icon" size={20} />
            </div>
            <h3>Status Akademik</h3>
            <div className="status-badge-container">
              <div className={`status-badge ${akademikData.semester.status.toLowerCase()}`}>
                {akademikData.semester.status}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Prestasi Akademik Card */}
      <div className={`dashboard-card prestasi-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.2s'}}>
        <div className="card-header">
          <Award className="card-icon" size={22} />
          <h2 className="card-title">Prestasi Akademik</h2>
        </div>
        
        <div className="prestasi-grid">
          <div className="prestasi-item">
            <div className="prestasi-content">
              <div className="prestasi-label">IPk</div>
              <div className="prestasi-value-container">
                <p className="prestasi-value">{akademikData.prestasi.ipk}</p>
                <div className="prestasi-indicator positive">
                  <span className="indicator-text">Baik</span>
                </div>
              </div>
            </div>
            <div className="prestasi-chart ipk-chart"></div>
          </div>
          
          <div className="prestasi-item">
            <div className="prestasi-content">
              <div className="prestasi-label">SKSk</div>
              <div className="prestasi-value-container">
                <p className="prestasi-value">{akademikData.prestasi.sksk}</p>
                <div className="prestasi-indicator neutral">
                  <span className="indicator-text">Normal</span>
                </div>
              </div>
            </div>
            <div className="prestasi-chart sksk-chart"></div>
          </div>
        </div>
      </div>
      
      {/* Quick Links Card */}
      <div className={`dashboard-card quick-links-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.3s'}}>
        <div className="card-header">
          <h2 className="card-title">Akses Cepat</h2>
        </div>
        
        <div className="quick-links-grid">
          <Link to="/mahasiswa/registrasi" className="quick-link">
            <div className="quick-link-icon registrasi-icon">📝</div>
            <span>Registrasi</span>
          </Link>
          
          <Link to="/mahasiswa/akademik/buat-irs" className="quick-link">
            <div className="quick-link-icon irs-icon">📄</div>
            <span>Buat IRS</span>
          </Link>
          
          <Link to="/mahasiswa/akademik/khs" className="quick-link">
            <div className="quick-link-icon khs-icon">📊</div>
            <span>Lihat KHS</span>
          </Link>
          
          <Link to="/help" className="quick-link">
            <div className="quick-link-icon help-icon">❓</div>
            <span>Bantuan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;