// src/pages/KHS.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Printer, PieChart, TrendingUp, Award } from 'lucide-react';
import './KHS.css';

function KHS({ user }) {
  const [loading, setLoading] = useState(true);
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      title: 'Semester 1 | Tahun Ajaran 2023/2024 Ganjil',
      totalSKS: 21,
      ip: 3.43,
      isOpen: true,
      courses: [
        { 
          id: 1, 
          code: 'PAIK6101', 
          name: 'Matematika I', 
          status: 'Baru',
          sks: 2,
          grade: 'A',
          letterValue: 4,
          weight: 8,
          weightedGrade: 4 * 2
        },
        { 
          id: 2, 
          code: 'PAIK6102', 
          name: 'Dasar Pemrograman', 
          status: 'Baru',
          sks: 3,
          grade: 'B',
          letterValue: 3,
          weight: 9,
          weightedGrade: 3 * 3
        },
        { 
          id: 3, 
          code: 'PAIK6103', 
          name: 'Dasar Sistem', 
          status: 'Baru',
          sks: 3,
          grade: 'B',
          letterValue: 3,
          weight: 9,
          weightedGrade: 3 * 3
        },
        { 
          id: 4, 
          code: 'PAIK6104', 
          name: 'Logika Informatika', 
          status: 'Baru',
          sks: 3,
          grade: 'A',
          letterValue: 4,
          weight: 12,
          weightedGrade: 4 * 3
        },
        { 
          id: 5, 
          code: 'PAIK6105', 
          name: 'Struktur Diskrit', 
          status: 'Baru',
          sks: 4,
          grade: 'A',
          letterValue: 4,
          weight: 16,
          weightedGrade: 4 * 4
        },
        { 
          id: 6, 
          code: 'UNW00003', 
          name: 'Pancasila dan Kewarganegaraan', 
          status: 'Baru',
          sks: 3,
          grade: 'A',
          letterValue: 4,
          weight: 12,
          weightedGrade: 4 * 3
        },
        { 
          id: 7, 
          code: 'UNW00005', 
          name: 'Olahraga', 
          status: 'Baru',
          sks: 1,
          grade: 'C',
          letterValue: 2,
          weight: 2,
          weightedGrade: 2 * 1
        },
        { 
          id: 8, 
          code: 'UNW00007', 
          name: 'Bahasa Inggris', 
          status: 'Baru',
          sks: 2,
          grade: 'C',
          letterValue: 2,
          weight: 4,
          weightedGrade: 2 * 2
        }
      ]
    },
    {
      id: 2,
      title: 'Semester 2 | Tahun Ajaran 2023/2024 Genap',
      totalSKS: 18,
      ip: 3.39,
      isOpen: false,
      courses: [
        { 
          id: 1, 
          code: 'UNW00011', 
          name: 'Pendidikan Agama', 
          status: 'Baru',
          sks: 2,
          grade: 'B',
          letterValue: 3,
          weight: 6,
          weightedGrade: 3 * 2
        },
        { 
          id: 2, 
          code: 'UNW00006', 
          name: 'Internet of Things', 
          status: 'Baru',
          sks: 2,
          grade: 'A',
          letterValue: 4,
          weight: 8,
          weightedGrade: 4 * 2
        },
        { 
          id: 3, 
          code: 'PAIK6204', 
          name: 'Aljabar Linear', 
          status: 'Baru',
          sks: 3,
          grade: 'B',
          letterValue: 3,
          weight: 9,
          weightedGrade: 3 * 3 
        },
        { 
          id: 4, 
          code: 'PAIK6202', 
          name: 'Algoritma dan Pemrograman', 
          status: 'Baru',
          sks: 4,
          grade: 'A',
          letterValue: 4,
          weight: 16,
          weightedGrade: 4 * 4
        },
        { 
          id: 5, 
          code: 'UNW00004', 
          name: 'Bahasa Indonesia', 
          status: 'Baru',
          sks: 2,
          grade: 'A',
          letterValue: 4,
          weight: 8,
          weightedGrade: 4 * 2
        },
        { 
          id: 6, 
          code: 'PAIK6203', 
          name: 'Organisasi dan Arsitektur Komputer', 
          status: 'Baru',
          sks: 3,
          grade: 'B',
          letterValue: 3,
          weight: 9,
          weightedGrade: 3 * 3
        },
        { 
          id: 7, 
          code: 'PAIK6201', 
          name: 'Matematika II', 
          status: 'Baru',
          sks: 2,
          grade: 'A',
          letterValue: 4,
          weight: 8,
          weightedGrade: 4 * 2
        }
      ]
    }
  ]);

  // Function to toggle semester accordion
  const toggleSemester = (id) => {
    setSemesters(semesters.map(semester => 
      semester.id === id ? {...semester, isOpen: !semester.isOpen} : semester
    ));
  };

  // Calculate GPA (IPK)
  const calculateGPA = () => {
    let totalWeightedGrade = 0;
    let totalSKS = 0;
    
    semesters.forEach(semester => {
      semester.courses.forEach(course => {
        totalWeightedGrade += course.weight;
        totalSKS += course.sks;
      });
    });
    
    return (totalWeightedGrade / totalSKS).toFixed(2);
  };
  
  // Data untuk chart performa akademik
  const performanceData = [
    { semester: 1, ip: 3.43 },
    { semester: 2, ip: 3.39 }
  ];

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
        <p>Memuat data KHS...</p>
      </div>
    );
  }

  return (
    <div className="khs-container">
      {/* Header */}
      <div className="page-header">
        <h1>Kartu Hasil Studi (KHS)</h1>
        <div className="breadcrumb">
          <span>Home</span> / <span>Akademik</span> / <span className="active">KHS</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card ipk-card">
          <div className="card-content">
            <div className="card-info">
              <h3>IPK (Indeks Prestasi Kumulatif)</h3>
              <p className="value">{calculateGPA()}</p>
            </div>
            <div className="card-icon">
              <Award />
            </div>
          </div>
          <div className="card-footer">
            <span className="trend positive">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              Naik 0.15 dari semester sebelumnya
            </span>
          </div>
        </div>
        
        <div className="summary-card sks-card">
          <div className="card-content">
            <div className="card-info">
              <h3>Total SKS</h3>
              <p className="value">{semesters.reduce((total, semester) => total + semester.totalSKS, 0)}</p>
            </div>
            <div className="card-icon">
              <PieChart />
            </div>
          </div>
          <div className="card-footer">
            <span className="info">
              SKS Semester 1: {semesters[0].totalSKS} | SKS Semester 2: {semesters[1].totalSKS}
            </span>
          </div>
        </div>
        
        <div className="summary-card last-ip-card">
          <div className="card-content">
            <div className="card-info">
              <h3>IP Semester Terakhir</h3>
              <p className="value">
                {semesters.find(s => s.id === Math.max(...semesters.map(s => s.id)))?.ip.toFixed(2)}
              </p>
            </div>
            <div className="card-icon">
              <TrendingUp />
            </div>
          </div>
          <div className="card-footer">
            <span className="semester-info">
              Semester {Math.max(...semesters.map(s => s.id))} - {semesters.find(s => s.id === Math.max(...semesters.map(s => s.id)))?.title.split('|')[1].trim()}
            </span>
          </div>
        </div>
      </div>

      {/* Academic Performance Chart */}
      <div className="performance-chart-card">
        <div className="card-header">
          <h2>Performa Akademik</h2>
        </div>
        <div className="performance-chart">
          {performanceData.map((data, index) => (
            <div key={index} className="chart-column">
              <div className="chart-bar-container">
                <div className="chart-value">{data.ip.toFixed(2)}</div>
                <div 
                  className="chart-bar"
                  style={{ height: `${data.ip/4 * 100}%` }}
                ></div>
              </div>
              <div className="chart-label">Semester {data.semester}</div>
            </div>
          ))}
        </div>
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
            <div className="semester-ip">
              <span>IP: {semester.ip.toFixed(2)}</span>
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
                    <th>STATUS</th>
                    <th>SKS</th>
                    <th>NILAI HURUF</th>
                    <th>BOBOT</th>
                    <th>SKS X BOBOT</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, index) => (
                    <tr key={course.id}>
                      <td className="text-center">{index + 1}</td>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td className="text-center">
                        <span className="status-badge">
                          {course.status}
                        </span>
                      </td>
                      <td className="text-center">{course.sks}</td>
                      <td className="text-center">
                        <span className={`grade-badge grade-${course.grade}`}>
                          {course.grade}
                        </span>
                      </td>
                      <td className="text-center">{course.letterValue}</td>
                      <td className="text-center">{course.weight}</td>
                    </tr>
                  ))}
                  
                  {/* Total row */}
                  <tr className="total-row">
                    <td colSpan="4" className="text-right">Total</td>
                    <td className="text-center">{semester.totalSKS}</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">{semester.courses.reduce((sum, course) => sum + course.weight, 0)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* IP calculation */}
            <div className="ip-calculation">
              <h3>IP Semester</h3>
              <div className="calculation-formula">
                <div className="formula">
                  <div className="formula-top">Σ(SKS × Bobot)</div>
                  <div className="formula-line"></div>
                  <div className="formula-bottom">Σ(SKS)</div>
                </div>
                <div className="formula-equals">=</div>
                <div className="formula-result">
                  <div className="formula-top">{semester.courses.reduce((sum, course) => sum + course.weight, 0)}</div>
                  <div className="formula-line"></div>
                  <div className="formula-bottom">{semester.totalSKS}</div>
                </div>
                <div className="formula-equals">=</div>
                <div className="final-result">{semester.ip.toFixed(2)}</div>
              </div>
            </div>

            {/* Print button */}
            <div className="print-action">
              <button className="btn btn-success">
                <Printer size={18} />
                <span>Cetak KHS</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KHS;