"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [code, setCode] = useState("Offi-......");

  useEffect(() => {
    async function loadCode() {
      try {
        const timestamp = new Date().getTime();
        const res = await fetch(`/api/code?t=${timestamp}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });
        
        if (!res.ok) {
          console.error('API Response not OK:', res.status);
          return;
        }
        
        const data = await res.json();
        console.log('Received code:', data.code); // Debug
        setCode(data.code);
      } catch (error) {
        console.error('Error loading code:', error);
      }
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
