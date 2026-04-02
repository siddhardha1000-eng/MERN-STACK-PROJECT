* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  min-height: 100vh;
  color: #e2e8f0;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #60a5fa;
  text-decoration: none;
}

.navbar-brand span { color: #fff; }

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}

.navbar-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.navbar-links a:hover { color: #fff; }

.nav-btn {
  background: #3b82f6;
  color: #fff !important;
  padding: 0.4rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
}

.live-badge {
  background: #10b981;
  color: #fff;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 700;
  margin-left: 4px;
}

/* Buttons */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: #fff;
}

.btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }

.btn-outline {
  background: rgba(255,255,255,0.07);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
}

.btn-outline:hover { background: rgba(255,255,255,0.12); }

.btn-danger {
  background: rgba(239,68,68,0.15);
  color: #f87171;
  border: 1px solid rgba(239,68,68,0.3);
}

.btn-danger:hover { background: rgba(239,68,68,0.25); }

/* Cards */
.glass-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

/* Forms */
.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  color: #94a3b8;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.95rem;
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #3b82f6;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #475569;
}

.form-group select option { background: #1e293b; }

/* Utility */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.text-center { text-align: center; }
.text-blue { color: #60a5fa; }
.text-muted { color: #64748b; }

/* Modal overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-box {
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
}

.modal-box h2 {
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}
