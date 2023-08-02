import readline from 'readline';
import { getAll, createUser, updateUser, deleteUser, getUserById} from './service.js';

/*
1. Buat fungsi dalam file service.js untuk menghandle pilihan update, delete dan detail
2. Buat fungsi dalam file index.js untuk menghandle input console untuk update, delete dan detail.
    untuk fungsi update inputnya adalah id, kemudian update data untuk  nama, update data untuk email
    untuk fungsi delete inputnya adalah id,
    untuk fungsi deteail inputnya adalah id, dan menampilkan data (object) user yang id nya di inputkan
*/

console.log(`
    Users Management App:

    1. add
    2. list
    3. update
    4. delete
    5. detail
`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    switch(input) {
        case 'add': 
            add();
        break;
        case 'list':
            list();
            break;
        case 'update':
            update();
            break;
        case 'delete':
            deleteUserPrompt();
            break;
        case 'detail':
            detail();
            break;
        default:
            console.log('perintah yang dipilih tidak dikenali');
            break;
    }
});

function add() {
    rl.question('Masukkan nama user: ', (name) => {
        rl.question('Masukkan email user: ', (email) => {
            rl.question('Masukkan password: ', (password) => {
                createUser(name, email, password);
            })
        })
    })
}

function list() {
    getAll();
}

function update() {
    rl.question('Masukkan ID user yang akan diupdate: ', (id) => {
      rl.question('Masukkan nama user baru: ', (name) => {
        rl.question('Masukkan email user baru: ', async (email) => {
          const isUpdated = await updateUser(id, name, email);
        });
      });
    });
  }

  function deleteUserPrompt() {
    rl.question('Masukkan ID user yang akan dihapus: ', async (id) => {
      rl.question('Apakah Anda yakin ingin menghapus user? (y/n): ', async (answer) => {
        if (answer.toLowerCase() === 'y') {
          try {
            const isDeleted = await deleteUser(id);
            if (isDeleted) {
              console.log('User berhasil dihapus.');
            } else {
              console.log('User tidak ditemukan atau gagal dihapus.');
            }
          } catch (error) {
            console.error('Gagal menghapus data:', error.message);
          }
        } else {
          console.log('Penghapusan user dibatalkan.');
        }
  
        rl.close();
      });
    });
  }

  function detail() {
    rl.question('Masukkan ID user : ', async (id) => {
        try {
            const user = await getUserById(id);
            if (user) {
                console.log('Detail user:');
                console.log(user);
            } else {
                console.log('User dengan ID tersebut tidak ditemukan.');
            }
        } catch (error) {
            console.error('Gagal menampilkan detail user:', error.message);
        }
    });
}
  
