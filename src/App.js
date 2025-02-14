import React from "react";
import "./App.css";

function App() {
  // GitHub Pages で公開後の manifest.plist の URL
  const manifestUrl = "https://au12jp.github.io/ipaInstaller/manifest.plist";
  const otaLink = `itms-services://?action=download-manifest&url=${encodeURIComponent(
    manifestUrl
  )}`;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>iOSアプリ OTA インストーラ</h1>
      <p>
        下記のボタンをタップすると、iOSデバイスにアプリのインストールが開始されます。
      </p>
      <a
        href={otaLink}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007aff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        インストールする
      </a>
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        ※ このページは iOS 端末でのみ動作確認してください。
      </p>
    </div>
  );
}

export default App;
