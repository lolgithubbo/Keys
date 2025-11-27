"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function loadCode() {
      const res = await fetch("/api/code");
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
