// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // tampilkan semua data awal
  console.log("\n=== DATA AWAL ===");
  index();

  // tambahkan dua data baru
  console.log("\n=== TAMBAH DATA ===");
  store({ nama: "Kevin", umur: 30, alamat: "Jl. Baru 1" });
  store({ nama: "Lia", umur: 19, alamat: "Jl. Baru 2" });

  // tampilkan setelah ditambah
  console.log("\n=== DATA SETELAH TAMBAH ===");
  index();

  // hapus data ke-3 (index = 2 karena mulai dari 0)
  console.log("\n=== HAPUS DATA KE-3 ===");
  destroy(2);

  // tampilkan setelah dihapus
  console.log("\n=== DATA SETELAH HAPUS ===");
  index();
};

// jalankan program
main();
