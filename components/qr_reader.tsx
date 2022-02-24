import React from "react";
import { QrReader } from "react-qr-reader";
import jwt from "jsonwebtoken";
import { Alert } from "@mui/material";

export default function QRReader() {
  const [isVerified, setIsVerified] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  );

  const verifyToken = React.useCallback((token: string) => {
    try {
      jwt.verify(token, process.env.NEXT_PUBLIC_IDENTIFIER!);
      setIsVerified(true);
      setErrorMessage(undefined);
    } catch (e) {
      setIsVerified(false);
      setErrorMessage("Invalid token");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <QrReader
        onResult={(result, error) => {
          if (result !== undefined) {
            const key = (result as any).text;
            verifyToken(key);
          }
        }}
        //@ts-ignore
        style={{ width: 400, height: 400 }}
        videoContainerStyle={{
          innerHeight: 100,
          innerWidth: 200,
        }}
        scanDelay={300}
      />
      {isVerified && <Alert severity="success">You are verified</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </div>
  );
}
