/**
 * Tailwind CSS yapılandırma dosyası
 * 
 * Özellikler:
 * - İçerik yolları
 * - Tema özelleştirmeleri
 * - Eklenti yapılandırmaları
 * 
 * @config
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Ana renk
        secondary: '#475569',  // İkincil renk
        background: '#f8fafc', // Arka plan rengi
      },
    },
  },
  plugins: [],
} 