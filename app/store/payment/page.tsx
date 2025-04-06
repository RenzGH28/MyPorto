"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, ZoomIn, Clipboard, X } from "lucide-react";

const EwalletData = [
  { providerEWallet: "DANA", numberEWallet: "0895 3293 50352", ownerEWallet: "Darren Jenaro" },
  { providerEWallet: "GOPAY", numberEWallet: "0838 4520 1171", ownerEWallet: "Darren Jenaro" },
  { providerEWallet: "SHOPEEPAY", numberEWallet: "0895 3293 50352", ownerEWallet: "Darren Jenaro" },
];

const BankData = [
  { providerBank: "SEABANK", numberBank: "-", ownerBank: "-" },
  { providerBank: "MANDIRI", numberBank: "-", ownerBank: "-" },
  { providerBank: "BCA", numberBank: "-", ownerBank: "-" },
];


export default function PaymentPage() {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Renz Store</h1>
        <p className="text-xl text-gray-700 mt-2">Digital Payment</p>
      </div>

      {/* QRIS */}
      <div className="border-2 border-dashed rounded-xl p-6 mb-4">
        <Image
          src="/images/qris.jpg"
          alt="QRIS"
          width={600}
          height={600}
          className="rounded-xl mx-auto"
        />

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setZoomOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            <ZoomIn size={18} />
            Perbesar
          </button>

          <a
            href="/images/qris.jpg"
            download
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800"
          >
            <Download size={18} />
            Unduh
          </a>
        </div>
      </div>

      {/* E-Wallet */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">E-Wallet</h2>
        <div className="space-y-4">
          {EwalletData.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
              <div>
                <p className="font-bold">{item.providerEWallet}</p>
                <p className="text-sm">{item.numberEWallet}</p>
                <p className="text-sm">A/n {item.ownerEWallet}</p>
              </div>
              <button
                className="text-emerald-600 hover:text-emerald-800"
                onClick={() => navigator.clipboard.writeText(item.numberEWallet)}
              >
                <Clipboard />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bank Transfer */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Bank Transfer</h2>
        <div className="space-y-4">
          {BankData.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
              <div>
                <p className="font-bold">{item.providerBank}</p>
                <p className="text-sm">{item.numberBank}</p>
                <p className="text-sm">A/n {item.ownerBank}</p>
              </div>
              <button
                className="text-emerald-600 hover:text-emerald-800"
                onClick={() => navigator.clipboard.writeText(item.numberBank)}
              >
                <Clipboard />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-xl p-4 max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setZoomOpen(false)}
            >
              <X />
            </button>
            <Image
              src="/images/qris.jpg"
              alt="QRIS Zoom"
              width={800}
              height={800}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}