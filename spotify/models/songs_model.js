import * as SongsRepository from '../repository/songs_repo.js';
import { respSuccess } from '../models/response.js'; // Corrected import statement

export const getSongs = async (req, res, next) => {
    try {
        const [result] = await SongsRepository.getAll();
        respSuccess(res, "success", result);
    } catch (error) {
        next(error);
    }
};

export const addSongs = async (req, res, next) => {
    try {
        const songs = await SongsRepository.createData(req.body.judul, req.body.artis, req.body.is_favorite);
        console.log(songs);
        respSuccess(res, "berhasil menambahkan lagu", songs, 201);
    } catch (error) {
        next(error);
    }
};