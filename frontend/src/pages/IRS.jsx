// src/pages/IRS.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Printer, FilePlus } from 'lucide-react';
import './IRS.css';

function IRS({ user }) {
  const [loading, setLoading] = useState(true);
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      title: 'Semester 1 | Tahun Ajaran 2023/2024 Ganjil',
      totalSKS: 21,
      isOpen: true,
      courses: [
        { 
          id: 1, 
          code: 'PAIK6103', 
          name: 'Dasar Sistem', 
          class: 'B', 
          sks: 3, 
          room: 'D302', 
          status: 'Baru',
          lecturers: ['Dra. Margaretha Suryaningsih, M.S', 'Prof. Dr. Widowati, S.Si., M.Si.'],
          day: 'Senin',
          time: '09:40 - 12:10'
        },
        { 
          id: 2, 
          code: 'UNW00003', 
          name: 'Pancasila dan Kewarganegaraan', 
          class: 'B', 
          sks: 3, 
          room: 'B203', 
          status: 'Baru',
          lecturers: ['Yunila Dwi Putri Ariyanti, S.Kom., M.Kom.', 'Dra. Margaretha Suryaningsih, M.S'],
          day: 'Senin',
          time: '13:00 - 15:30'
        },
        { 
          id: 3, 
          code: 'UNW00007', 
          name: 'Bahasa Inggris', 
          class: 'B', 
          sks: 2, 
          room: 'G203', 
          status: 'Baru',
          lecturers: ['Beta Noranita, S.Si., M.Kom.', 'Muhammad Malik Hakim, S.T., M.T.I.'],
          day: 'Selasa',
          time: '13:00 - 14:40'
        },
        { 
          id: 4, 
          code: 'PAIK6101', 
          name: 'Matematika I', 
          class: 'B', 
          sks: 2, 
          room: 'B203', 
          status: 'Baru',
          lecturers: ['Dr.Eng. Adi Wibowo, S.Si., M.Kom.', 'Muhammad Malik Hakim, S.T., M.T.I.'],
          day: 'Selasa',
          time: '15:40 - 17:20'
        },
        { 
          id: 5, 
          code: 'PAIK6105', 
          name: 'Struktur Diskrit', 
          class: 'B', 
          sks: 4, 
          room: 'F105', 
          status: 'Baru',
          lecturers: ['Dr. Yeva Fadhilah Ashari, S.Si., M.Si.', 'Dr. Indra Waspada, S.T., M.TI'],
          day: 'Rabu',
          time: '09:40 - 13:00'
        },
        { 
          id: 6, 
          code: 'PAIK6102', 
          name: 'Dasar Pemrograman', 
          class: 'B', 
          sks: 3, 
          room: 'F301', 
          status: 'Baru',
          lecturers: ['Jatmiko Endro Suseno, S.Si., M.Si., Ph.D.', 'Dr. Yeva Fadhilah Ashari, S.Si., M.Si.'],
          day: 'Rabu',
          time: '13:00 - 15:30'
        },
        { 
          id: 7, 
          code: 'UNW00005', 
          name: 'Olahraga', 
          class: 'B', 
          sks: 1, 
          room: 'D302', 
          status: 'Baru',
          lecturers: ['Dinar Mutiara Kusumo Nugraheni, S.T., M.InfoTech.(Comp)., Ph.D.', 'Dra. R.A.J. Atrinawati, M.Hum'],
          day: 'Rabu',
          time: '15:40 - 16:30'
        },
        { 
          id: 8, 
          code: 'PAIK6104', 
          name: 'Logika Informatika', 
          class: 'B', 
          sks: 3, 
          room: 'B105', 
          status: 'Baru',
          lecturers: ['Sandy Kurniawan, S.Kom., M.Kom.', 'Dr. Yeva Fadhilah Ashari, S.Si., M.Si.'],
          day: 'Jumat',
          time: '13:00 - 15:30'
        }
      ]
    },
    {
      id: 2,
      title: 'Semester 2 | Tahun Ajaran 2023/2024 Genap',
      totalSKS: 18,
      isOpen: false,
      courses: [
        { 
          id: 1, 
          code: 'UNW00011', 
          name: 'Pendidikan Agama', 
          class: 'B', 
          sks: 2, 
          room: 'C301', 
          status: 'Baru',
          lecturers: ['Dinar Mutiara Kusumo Nugraheni, S.T., M.InfoTech.(Comp)., Ph.D.', 'Sandy Kurniawan, S.Kom., M.Kom.'],
          day: 'Senin',
          time: '07:00 - 08:40'
        },
        { 
          id: 2, 
          code: 'UNW00006', 
          name: 'Internet of Things', 
          class: 'B', 
          sks: 2, 
          room: 'D303', 
          status: 'Baru',
          lecturers: ['Dyah Wijaningsih, S.H., M.H.', 'Adhe Setya Pramayoga, M.T.'],
          day: 'Senin',
          time: '13:00 - 14:40'
        },
        { 
          id: 3, 
          code: 'PAIK6204', 
          name: 'Aljabar Linear', 
          class: 'B', 
          sks: 3, 
          room: 'C204', 
          status: 'Baru',
          lecturers: ['Dr. Indra Waspada, S.T., M.TI', 'Dra. Darosy Endah Hyoscyamina, M.Pd.'],
          day: 'Senin',
          time: '15:40 - 18:10'
        },
        { 
          id: 4, 
          code: 'PAIK6202', 
          name: 'Algoritma dan Pemrograman', 
          class: 'B', 
          sks: 4, 
          room: 'D104', 
          status: 'Baru',
          lecturers: ['Dinar Mutiara Kusumo Nugraheni, S.T., M.InfoTech.(Comp)., Ph.D.', 'Khadijah, S.Kom., M.Cs.'],
          day: 'Selasa',
          time: '07:00 - 10:20'
        },
        { 
          id: 5, 
          code: 'UNW00004', 
          name: 'Bahasa Indonesia', 
          class: 'B', 
          sks: 2, 
          room: 'C205', 
          status: 'Baru',
          lecturers: ['Ragil Saputra, S.Si., M.Cs.', 'Prof. Dr. Widowati, S.Si., M.Si.'],
          day: 'Kamis',
          time: '09:40 - 11:20'
        },
        { 
          id: 6, 
          code: 'PAIK6203', 
          name: 'Organisasi dan Arsitektur Komputer', 
          class: 'B', 
          sks: 3, 
          room: 'D105', 
          status: 'Baru',
          lecturers: ['Priajanto Wahyu Adi, M.Kom.', 'Dr. Retno Kusumaningrum, S.Si., M.Kom.'],
          day: 'Kamis',
          time: '15:40 - 18:10'
        },
        { 
          id: 7, 
          code: 'PAIK6201', 
          name: 'Matematika II', 
          class: 'B', 
          sks: 2, 
          room: 'A103', 
          status: 'Baru',
          lecturers: ['Nurdin Bahtiar, S.Si., M.T.', 'Henni Tantyoko, S.Kom., M.Kom.'],
          day: 'Jumat',
          time: '09:40 - 11:20'
        }
      ]
    }
  ]);

  // Status advisor
  const advisorInfo = {
    name: '(NIP: 197404011999031002)'
  };

  // Function to toggle semester accordion
  const toggleSemester = (id) => {
    setSemesters(semesters.map(semester => 
      semester.id === id ? {...semester, isOpen: !semester.isOpen} : semester
    ));
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Memuat data IRS...</p>
      </div>
    );
  }

  return (
    <div className="irs-container">
      {/* Header */}
      <div className="page-header">
        <h1>Isian Rancangan Studi (IRS)</h1>
        <div className="breadcrumb">
          <span>Home</span> / <span>Akademik</span> / <span className="active">IRS</span>
        </div>
      </div>

      {/* Alert Notification */}
      <div className="alert-notification">
        <div className="alert-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <div className="alert-content">
          Periode pengisian IRS sudah dimulai. Silakan lengkapi IRS Anda sebelum tanggal 15 Agustus 2023.
        </div>
      </div>

      {/* Advisor info */}
      <div className="advisor-info-card">
        <div className="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h3>Informasi Dosen Wali</h3>
        </div>
        <div className="advisor-details">
          <div className="advisor-item">
            <span className="label">Nama Dosen Wali:</span>
            <span className="value">Dr. Eko Prasetyo, S.T., M.Kom.</span>
          </div>
          <div className="advisor-item">
            <span className="label">NIP:</span>
            <span className="value">197404011999031002</span>
          </div>
          <div className="advisor-item">
            <span className="label">Status Persetujuan:</span>
            <span className="value status-approved">Disetujui</span>
          </div>
        </div>
      </div>

      {/* Create new IRS button */}
      <div className="action-buttons">
        <button className="btn btn-primary">
          <FilePlus size={18} />
          <span>Buat IRS Baru</span>
        </button>
      </div>

      {/* Semesters */}
      {semesters.map(semester => (
        <div key={semester.id} className="semester-card">
          {/* Semester header */}
          <div 
            className={`semester-header ${semester.isOpen ? 'active' : ''}`}
            onClick={() => toggleSemester(semester.id)}
          >
            <div className="semester-info">
              <h2>{semester.title}</h2>
              <span className="semester-sks">Jumlah SKS {semester.totalSKS}</span>
            </div>
            <div className="semester-toggle">
              {semester.isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {/* Semester content */}
          <div className={`semester-content ${semester.isOpen ? 'open' : ''}`}>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>KODE</th>
                    <th>MATA KULIAH</th>
                    <th>KELAS</th>
                    <th>SKS</th>
                    <th>RUANG</th>
                    <th>STATUS</th>
                    <th>NAMA DOSEN</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, index) => (
                    <React.Fragment key={course.id}>
                      <tr>
                        <td className="text-center">{index + 1}</td>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td className="text-center">{course.class}</td>
                        <td className="text-center">{course.sks}</td>
                        <td className="text-center">{course.room}</td>
                        <td className="text-center">
                          <span className="status-badge">
                            {course.status}
                          </span>
                        </td>
                        <td>
                          {course.lecturers.map((lecturer, idx) => (
                            <div key={idx} className="lecturer-name">{lecturer}</div>
                          ))}
                        </td>
                      </tr>
                      <tr className="schedule-row">
                        <td colSpan="8" className="schedule-info">
                          {course.day} pukul {course.time}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Print button */}
            <div className="print-action">
              <button className="btn btn-success">
                <Printer size={18} />
                <span>Cetak IRS</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IRS;