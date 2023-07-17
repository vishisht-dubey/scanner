import React, { useState, useEffect } from "react";
import "./App.css";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const success = (result) => {
      scanner.clear();
      setScanResult(result);
    };
    const error = (err) => {
      // console.log(err);
    };
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 150 },
      fps: 5,
    });
    scanner.render(success, error);
  }, []);
  return (
    <div className="App">
      <h1>QR Code reader</h1>
      <div id="reader"></div>
      <h2>{scanResult ? scanResult : "error"}</h2>
    </div>
  );
}

export default App;
