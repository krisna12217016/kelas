import * as UserRepository from './repository.js';

export const getAll = async () => {
    const [result] = await UserRepository.getAll();

    console.log(result);
}

export const createUser = async (name, email, password) => {
    const [result] = await UserRepository.createData(name, email, password);

    console.log(result);
}

export const updateUser = async (id, name, email) => {
    const [result] = await UserRepository.updateData(id, name, email);
  
    console.log(result);
  };

  export const deleteUser = async (id) => {
    try {
      const isDeleted = await UserRepository.deleteData(id);
      return isDeleted;
    } catch (err) {
      console.error(err);
      return false; 
    }
  };

  export const getUserById = async (id) => {
    const [user] = await UserRepository.getUserById(id);
    return user;
}