# Tugas 2 - JavaScript

## 📌 Deskripsi
Tugas ini dibuat untuk menampilkan **data pegawai** dalam bentuk tabel HTML menggunakan **JavaScript**.  
Data pegawai berisi informasi:  
- Nama Pegawai  
- Umur  
- Jabatan  
- Status  
- Gaji Pokok  
- Tunjangan Jabatan  
- BPJS  
- Tunjangan Keluarga  
- Total Gaji (ditampilkan pada bagian `tfoot` tabel)  

## 🛠️ Fitur dalam Program
1. **Penggunaan If Statement**  
   - Untuk menentukan **gaji pokok** berdasarkan jabatan.  
     - Manajer = Rp 15.000.000  
     - Asisten Manajer = Rp 10.000.000  
     - Staff = Rp 5.000.000  

2. **Perhitungan Tunjangan dan Potongan**  
   - Tunjangan Jabatan = 15% dari gaji pokok  
   - BPJS = 10% dari gaji pokok  
   - Tunjangan Keluarga = 20% dari gaji pokok (hanya jika status = menikah, menggunakan **operator ternary**)  

3. **Total Gaji**  
   - Hasil penjumlahan dari semua komponen gaji ditampilkan di bagian bawah tabel (`tfoot`).  

##  Contoh Data Pegawai
Data yang digunakan dalam tugas ini:  
- Nama: **jayas permana**  
- Umur: **22 tahun**  
- Jabatan: **Staff**  
- Status: **Belum Menikah**  

###  Hasil Perhitungan
- Gaji Pokok = Rp 5.000.000  
- Tunjangan Jabatan (15%) = Rp 750.000  
- BPJS (10%) = Rp 500.000  
- Tunjangan Keluarga = Rp 0 (karena belum menikah)  
- **Total Gaji = Rp 6.250.000**  

##  Cara Menjalankan
1. Clone atau download repository ini.  
2. Buka file `tugas2_pegawai.html` di browser (Chrome/Edge/Firefox).  
3. Tabel data pegawai beserta perhitungan gaji akan otomatis ditampilkan.  

## Catatan
- Tugas ini dibuat sebagai latihan dasar **JavaScript** (if, ternary operator, dan manipulasi DOM).  
- Semua perhitungan dilakukan otomatis dengan JavaScript, bukan ditulis manual.  
