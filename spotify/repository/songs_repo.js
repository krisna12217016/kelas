import dbPool from "../database/db.js";

export const getAll = async () => { 
    const sql = "SELECT * FROM songs";
    const [result] = await dbPool.query(sql); 
    return result;
}

export const createData = async (judul, artis, is_favorite) => { 
    let createdAt = new Date();
    const sql = "INSERT INTO songs (judul, artis, is_favorite) VALUES (?, ?, ?)"; 
    const value = [judul, artis, is_favorite];

    const [result] = await dbPool.query(sql, value); 
    return result;
}