function update() {
    rl.question('Masukkan ID user yang akan diupdate: ', (id) => {
      rl.question('Masukkan nama user baru: ', (name) => {
        rl.question('Masukkan email user baru: ', async (email) => {
          const isUpdated = await updateUser(id, name, email);
          if (isUpdated) {
            console.log('User berhasil diupdate.');
          } else {
            console.log('Gagal mengupdate user.');
          }
          rl.close();
        });
      });
    });
  }