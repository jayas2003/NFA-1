// ==================================================
// Sistem Manajemen Transportasi (OOP - JavaScript)
// Dibuat oleh: Jayas Permana (STTNF)
// ==================================================

// =======================
// Class Kendaraan (Super)
// =======================
class Kendaraan {
    constructor(nama, jenis, tarif) {
        this.nama = nama;     // contoh: Avanza, Vario
        this.jenis = jenis;   // contoh: Mobil, Motor
        this.tarif = tarif;   // harga sewa per hari
    }

    infoKendaraan() {
        return `${this.jenis} - ${this.nama} (Rp${this.tarif}/hari)`;
    }
}

// =======================
// Subclass dari Kendaraan
// =======================
class Mobil extends Kendaraan {
    constructor(nama, tarif) {
        super(nama, "Mobil", tarif);
    }
}

class Motor extends Kendaraan {
    constructor(nama, tarif) {
        super(nama, "Motor", tarif);
    }
}

// =======================
// Class Pelanggan
// =======================
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
        this.lamaSewa = 0; // hari
    }

    sewaKendaraan(kendaraan, lamaSewa) {
        this.kendaraanDisewa = kendaraan;
        this.lamaSewa = lamaSewa;
        console.log(
            `${this.nama} menyewa ${kendaraan.infoKendaraan()} selama ${lamaSewa} hari.`
        );
    }

    hitungTotalBayar() {
        if (!this.kendaraanDisewa) return 0;
        return this.kendaraanDisewa.tarif * this.lamaSewa;
    }

    infoPelanggan() {
        return `
Nama         : ${this.nama}
No. Telepon  : ${this.nomorTelepon}
Kendaraan    : ${this.kendaraanDisewa ? this.kendaraanDisewa.infoKendaraan() : "Belum menyewa"}
Lama Sewa    : ${this.lamaSewa} hari
Total Bayar  : Rp${this.hitungTotalBayar()}
        `;
    }
}

// =======================
// Sistem Manajemen
// =======================
class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelanggan() {
        console.log("\n=== Daftar Pelanggan yang Sedang Menyewa Kendaraan ===");
        this.daftarPelanggan.forEach((p, index) => {
            console.log(`\n[${index + 1}] ${p.infoPelanggan()}`);
        });
    }
}

// =======================
// Simulasi Program
// =======================

// Buat kendaraan
let mobilAvanza = new Mobil("Avanza", 350000);
let mobilInnova = new Mobil("Innova", 500000);
let motorVario = new Motor("Vario", 100000);
let motorNMax = new Motor("NMax", 150000);

// Buat pelanggan
let pelanggan1 = new Pelanggan("Andi", "08123456789");
let pelanggan2 = new Pelanggan("Budi", "08987654321");

// Transaksi penyewaan
pelanggan1.sewaKendaraan(mobilAvanza, 3); // Andi sewa 3 hari
pelanggan2.sewaKendaraan(motorNMax, 2);   // Budi sewa 2 hari

// Tambahkan ke sistem
let sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Tampilkan daftar pelanggan
sistem.tampilkanPelanggan();