import * as UserRepository from '../repository/user.js';
import { respSuccess } from '../utils/response.js';

export const getUser = async (req, res, next) =>{
    try {
        const [result] = await UserRepository.getAll();
        respSuccess(res, "success", result);
    } catch(error) {
        next(error);
    }
}

export const addUser = async (req, res, next) => {
    try {
        const user = await UserRepository.createData(req.body.name, req.body.email, req.body.password);
        console.log(user);
        respSuccess(res, "berhasil menambahkan user", user, 201);
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await UserRepository.updateUser(id, name, email);
        if (user) {
            return res.status(200).json({ message: 'User updated successfully' });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Failed to update user' });
    }
};
