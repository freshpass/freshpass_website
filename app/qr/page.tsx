'use client'

import { useState } from 'react'
import QRCode from 'qrcode'

export default function WiFiQRGenerator() {
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [encryption, setEncryption] = useState('WPA')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const encryptionTypes = [
    { value: 'WPA', label: 'WPA3/WPA2' },
    { value: 'WPA2', label: 'WPA2' },
    { value: 'WPA', label: 'WPA' },
    { value: 'WEP', label: 'WEP' },
    { value: 'nopass', label: 'Open (No Password)' }
  ]

  const generateQR = async () => {
    if (!ssid) return

    const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};H:false;;`
    
    try {
      const url = await QRCode.toDataURL(wifiString, {
        width: 300,
        margin: 2,
        color: {
          dark: '#2E3331',
          light: '#EDF0E9'
        }
      })
      setQrCodeUrl(url)
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  const downloadQR = () => {
    if (!qrCodeUrl) return
    
    const link = document.createElement('a')
    link.download = `wifi-${displayName || ssid}-qr.png`
    link.href = qrCodeUrl
    link.click()
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <img 
              src="/Icon-Dark.svg" 
              alt="FreshPass Logo" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 font-display">
              Wi-Fi QR Generator
            </h1>
            <p className="text-lg text-gray-green font-text">
              Generate QR codes for easy Wi-Fi sharing
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-dark-gray font-medium mb-2 font-text">
                  Network Name (SSID) *
                </label>
                <input
                  type="text"
                  value={ssid}
                  onChange={(e) => setSsid(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freshpass-green focus:border-transparent font-text"
                  placeholder="Enter Wi-Fi network name"
                />
              </div>

              <div>
                <label className="block text-dark-gray font-medium mb-2 font-text">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freshpass-green focus:border-transparent font-text"
                  placeholder="Enter Wi-Fi password"
                />
              </div>

              <div>
                <label className="block text-dark-gray font-medium mb-2 font-text">
                  Display Name (Optional)
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freshpass-green focus:border-transparent font-text"
                  placeholder="Name for QR code file"
                />
              </div>

              <div>
                <label className="block text-dark-gray font-medium mb-2 font-text">
                  Encryption Type
                </label>
                <select
                  value={encryption}
                  onChange={(e) => setEncryption(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-freshpass-green focus:border-transparent font-text"
                >
                  {encryptionTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={generateQR}
                disabled={!ssid}
                className="w-full bg-freshpass-green text-dark-gray py-3 px-6 rounded-lg font-medium hover:bg-freshpass-green-70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-text"
              >
                Generate QR Code
              </button>
            </div>
          </div>

          {/* QR Code Display */}
          {qrCodeUrl && (
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-xl font-bold text-dark-gray mb-4 font-display">
                Your Wi-Fi QR Code
              </h3>
              <div className="mb-6">
                <img 
                  src={qrCodeUrl} 
                  alt="Wi-Fi QR Code" 
                  className="mx-auto border-2 border-gray-200 rounded-lg"
                />
              </div>
              <p className="text-gray-green mb-4 font-text">
                {displayName || ssid}
              </p>
              <button
                onClick={downloadQR}
                className="bg-dark-gray text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-green transition-colors font-text"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}