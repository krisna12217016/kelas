/*
algoritma menghitung jumlah pembayaran jika pembayaran lebih dari 300.000 akan mendapatkan diskon 10%
1. mulai agoritma
2. masukan total belanjaan dari pengguna
3. jika total belanjaan lebih dari atau sama dengan 300.000, lanjut hitung diskon / langkah ke 4, jika tidak maka lanjut ke langkah 6
4. hitung diskon 10% dari total belanjaan
5. kurangi total belanjaan dengan jumlah diskon yang dihitung 
6. tampilkan total belanjaan yang harus dibayarkan oleh pengguna
7. selesai
*/
function hitungTotalPayment(totalBelanja) {
    if (totalBelanja >= 300000) {
      const diskon = totalBelanja * 0.1; // Menghitung diskon 10%
      totalBelanja -= diskon; // Mengurangi total belanjaan dengan jumlah diskon
    }
    return totalBelanja; // Mengembalikan total belanjaan setelah diberikan diskon (jika ada)
  }
  
  // Contoh penggunaan
  const totalBelanjaan = 350000;
  const totalBayar = hitungTotalPayment(totalBelanjaan);
  
  console.log(`Total belanjaan: ${totalBelanjaan}`);
  console.log(`Total bayar setelah diskon: ${totalBayar}`);