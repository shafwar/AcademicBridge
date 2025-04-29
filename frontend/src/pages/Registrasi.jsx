// src/pages/Registrasi.jsx
import React, { useState, useEffect } from 'react';
import { FileText, Info, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import './Registrasi.css';

const Registrasi = () => {
  const [statusAktif, setStatusAktif] = useState(true);
  const [animate, setAnimate] = useState(false);
  
  // Data mahasiswa (dalam aplikasi nyata akan diambil dari API)
  const mahasiswa = {
    nama: "Naufal Shafi Anwar",
    nim: "24060122140185",
    prodi: "Informatika S1",
    statusAkademik: "Aktif"
  };

  const handleStatusChange = (status) => {
    // Dalam aplikasi nyata, Anda akan mengirim permintaan ke backend
    setStatusAktif(status === 'aktif');
    console.log('Status diubah menjadi:', status);
  };
  
  // Trigger animations after component mounts
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    // PENTING: Hapus div dengan class "registrasi-container" dan Sidebar
    <div className={`registrasi-content ${animate ? 'animate-in' : ''}`}>
      <div className="registrasi-header">
        <h1>Registrasi</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">/</span>
          <span className="current">Registrasi</span>
        </div>
      </div>

      {/* Status Information Banner */}
      <div className="status-banner">
        <div className="banner-icon">
          <Info size={20} />
        </div>
        <div className="banner-content">
          <p>Periode registrasi untuk semester baru telah dibuka. Silakan pilih status untuk melanjutkan.</p>
        </div>
      </div>

      {/* Status Selection Card */}
      <div className={`registrasi-card selection-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.1s'}}>
        <div className="card-header">
          <FileText className="card-icon" size={22} />
          <h2>Pilih Status Akademik</h2>
        </div>
        
        <p className="instruction">
          Silakan pilih salah satu status akademik berikut untuk semester ini:
        </p>
        
        <div className="status-options">
          <div className={`status-option aktif ${statusAktif ? 'selected' : ''}`}>
            <div className="option-header">
              <div className="option-icon-container">
                <CheckCircle className="option-icon" size={20} />
              </div>
              <h3>Aktif</h3>
            </div>
            <p>
              Anda akan mengikuti kegiatan perkuliahan pada semester ini
              serta mengisi Isian Rencana Studi (IRS).
            </p>
            <button
              className={`option-button ${statusAktif ? 'selected' : ''}`}
              onClick={() => handleStatusChange('aktif')}
            >
              {statusAktif ? 'Terpilih' : 'Pilih'}
            </button>
          </div>
          
          <div className={`status-option cuti ${!statusAktif ? 'selected' : ''}`}>
            <div className="option-header">
              <div className="option-icon-container">
                <AlertTriangle className="option-icon" size={20} />
              </div>
              <h3>Cuti</h3>
            </div>
            <p>
              Menghentikan kuliah sementara untuk semester ini tanpa
              kehilangan status sebagai mahasiswa.
            </p>
            <button
              className={`option-button ${!statusAktif ? 'selected' : ''}`}
              onClick={() => handleStatusChange('cuti')}
            >
              {!statusAktif ? 'Terpilih' : 'Pilih'}
            </button>
          </div>
        </div>
      </div>

      {/* Her-Registrasi Card */}
      <div className={`registrasi-card her-registrasi-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.2s'}}>
        <div className="card-header">
          <Info className="card-icon" size={22} />
          <h2>Her-Registrasi</h2>
        </div>
        
        <div className="status-info-container">
          <p className="status-info">
            Status akademik Anda: 
            <span className={`status-value ${mahasiswa.statusAkademik.toLowerCase()}`}>
              {mahasiswa.statusAkademik}
            </span>
          </p>
        </div>
        
        <div className="info-text-container">
          <p className="info-text">
            Informasi lebih lanjut mengenai her-registrasi, atau mekanisme serta pengajuan 
            penangguhan pembayaran dapat ditanyakan melalui Biro Administrasi Akademik (BAA) 
            atau program studi masing-masing.
          </p>
        </div>
        
        <div className="action-buttons">
          <button className="action-button primary">
            Unduh Panduan Her-Registrasi
          </button>
          <button className="action-button secondary">
            Hubungi BAA
          </button>
        </div>
      </div>
      
      {/* Timeline Card */}
      <div className={`registrasi-card timeline-card ${animate ? 'animate-in' : ''}`} style={{animationDelay: '0.3s'}}>
        <div className="card-header">
          <h2>Timeline Registrasi</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item completed">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Pembukaan Portal Registrasi</h3>
              <p className="timeline-date">10 Januari 2025</p>
              <p>Portal registrasi semester dibuka untuk seluruh mahasiswa.</p>
            </div>
          </div>
          
          <div className="timeline-item active">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Pemilihan Status Akademik</h3>
              <p className="timeline-date">10-20 Januari 2025</p>
              <p>Mahasiswa memilih status aktif atau cuti untuk semester mendatang.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Pembayaran UKT</h3>
              <p className="timeline-date">15-31 Januari 2025</p>
              <p>Pembayaran UKT melalui bank mitra yang telah ditentukan.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Pengisian IRS</h3>
              <p className="timeline-date">1-10 Februari 2025</p>
              <p>Pengisian Isian Rencana Studi untuk semester baru.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;