"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "anp2026";
const REPORTEI_URL = "https://app.reportei.com/dashboard/eeEzrItpgUX7WaYZR1HF2Wmi1OLypKKU";

export default function DashboardGate() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("anp-dash-auth");
    if (saved === "true") setAuthenticated(true);
    setLoading(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("anp-dash-auth", "true");
      setError(false);
    } else {
      setError(true);
    }
  }

  if (loading) return null;

  if (!authenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #18234b 50%, #1e3a5f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        <div style={{
          background: "rgba(19, 32, 64, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(115, 188, 219, 0.15)",
          borderRadius: "20px",
          padding: "48px 40px",
          maxWidth: "420px",
          width: "90%",
          textAlign: "center",
        }}>
          <img
            src="/images/anp-logo-7.png"
            alt="ANP Health"
            style={{ height: "60px", margin: "0 auto 24px" }}
          />
          <h1 style={{
            color: "white",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "8px",
            fontFamily: "'Anko', system-ui, sans-serif",
          }}>
            Dashboard de Rendimiento
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "32px" }}>
            Ingresa la contraseña para acceder
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Contraseña"
              style={{
                width: "100%",
                padding: "14px 18px",
                borderRadius: "12px",
                border: error ? "2px solid #ef4444" : "1px solid rgba(115, 188, 219, 0.2)",
                background: "rgba(15, 23, 42, 0.6)",
                color: "white",
                fontSize: "16px",
                outline: "none",
                marginBottom: "16px",
                boxSizing: "border-box",
              }}
              autoFocus
            />
            {error && (
              <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px" }}>
                Contraseña incorrecta
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                background: "#3b82f6",
                color: "white",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              Acceder
            </button>
          </form>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", marginTop: "24px" }}>
            Powered by Muller y Pérez
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      {/* Header bar */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/images/anp-logo-1.png" alt="ANP Health" style={{ height: "36px" }} />
          <div style={{ height: "24px", width: "1px", background: "#e2e8f0" }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "#1e293b" }}>ANP HEALTH SOLUTIONS</div>
            <div style={{ fontSize: "11px", color: "#94a3b8" }}>Dashboard de Rendimiento · Google Ads</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src="https://www.mulleryperez.cl/logo-color.png" alt="M&P" style={{ height: "24px", opacity: 0.5 }} />
          <button
            onClick={() => { sessionStorage.removeItem("anp-dash-auth"); setAuthenticated(false); }}
            style={{
              padding: "6px 14px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              background: "white",
              fontSize: "12px",
              color: "#64748b",
              cursor: "pointer",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Reportei iframe */}
      <iframe
        src={REPORTEI_URL}
        style={{
          width: "100%",
          height: "calc(100vh - 61px)",
          border: "none",
        }}
        title="ANP Health Dashboard"
      />
    </div>
  );
}
