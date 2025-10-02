// controller.mjs
import users from "./data.mjs";

// 🔎 tampilkan semua data
const index = () => {
  console.log("=== Daftar Users ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
  });
};

// ➕ tambah data baru
const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan!`);
};

// ❌ hapus data berdasarkan index
const destroy = (indexUser) => {
  if (indexUser >= 0 && indexUser < users.length) {
    const removed = users.splice(indexUser, 1);
    console.log(`Data ${removed[0].nama} berhasil dihapus!`);
  } else {
    console.log("Index tidak valid!");
  }
};

export { index, store, destroy };
