import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

// interface BackupPrivateKeyProps {
//   privateKey: string;
// }

const BackupPrivateKey: React.FC = () => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [pvk, setPvk] = useState("");

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("token")!);
    setPvk(userToken.pvt);
  }, []);

  const togglePrivateKeyVisibility = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  const handleDownloadButtonClick = () => {
    const element = document.createElement("a");
    const file = new Blob([pvk], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "private-key.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div>
      <h2>Backup Private Key</h2>
      <p>Make sure to keep this private key in a safe and secure place.</p>
      <p>
        <Button variant="contained" onClick={togglePrivateKeyVisibility}>
          {showPrivateKey ? "Hide Private Key" : "Show Private Key"}
        </Button>
      </p>
      {showPrivateKey && (
        <p>
          <TextField
            label="Private Key"
            variant="outlined"
            value={pvk}
            fullWidth
            multiline
            rows={4}
          />
        </p>
      )}
      <br />
      <Button variant="contained" onClick={handleDownloadButtonClick}>
        Download Private Key
      </Button>
    </div>
  );
};

export default BackupPrivateKey;
