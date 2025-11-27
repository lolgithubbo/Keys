"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [code, setCode] = useState("------");

  useEffect(() => {
    async function loadCode() {
      // Fügt Timestamp hinzu, um Cache zu verhindern
      const timestamp = new Date().getTime();
      const res = await fetch(`/api/code?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      const data = await res.json();
      setCode(data.code);
    }
    loadCode();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code kopiert!");
  };

  return (
    <div className="container">
      <div className="snow"></div>
      
      <div className="code-box">
        <h1>{code}</h1>
        <button onClick={copyCode}>Kopieren</button>
      </div>
    </div>
  );
}
