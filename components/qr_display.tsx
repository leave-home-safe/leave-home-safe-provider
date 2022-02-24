import React from "react";
import QRCode from "react-qr-code";

export default function QRDisplay() {
  const result = {
    key: process.env.NEXT_PUBLIC_IDENTIFIER!,
    location: process.env.NEXT_PUBLIC_LOCATION!,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <QRCode size={400} value={JSON.stringify(result)} />
    </div>
  );
}
