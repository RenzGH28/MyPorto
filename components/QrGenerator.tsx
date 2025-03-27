"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export function QrGenerator({ url }: { url: string }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, { width: 150 }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [url]);

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600">Scan untuk melihat halaman ini:</p>
      <canvas ref={canvasRef} className="mt-2"></canvas>
    </div>
  );
}