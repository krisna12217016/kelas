/*
algoritma linear serach
1. mulai algoritma
2. buat perulangan yang berjalan melalui setiap array, dimulai dari index 0
3. pada setiap literasi (perulangan), periksa apakah elemen saat ini sama dengan nilai yang dicari
4. jika elemen saat ini sama dengan elemen yang dicari meka kembalikan index elemen tersebut 
5. jika tidak ada elemen yang cocok setelah selesai maka kembalikan nilai -1 untuk menandakan bahwa elemen tidak ditemukan
6. selesai
*/
function linearSearch(arr, nilai) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nilai) {
      return i; // Mengembalikan index jika elemen ditemukan
    }
  }
  return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

// Contoh penggunaan
const array = [10, 25, 5, 45, 30, 15];
const nilaiValue = 45;
const result = linearSearch(array, nilaiValue);

if (result !== -1) {
  console.log(`Elemen ${nilaiValue} ditemukan pada index ${result}.`);
} else {
  console.log(`Elemen ${nilaiValue} tidak ditemukan dalam array.`);
}