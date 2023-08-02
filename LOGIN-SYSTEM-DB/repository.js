import dbPool from "./db.js";

export const getAll = () => {
    const sql = "SELECT * FROM users";
    const result = dbPool.query(sql);
    return result;
}

export const createData = (name, email, password) => {
    let createdAt = new Date();
    const sql = "INSERT INTO users (name, email, password, created_at) VALUE (?, ?, ?, ?)";
    const value = [name, email, password, createdAt];

    return dbPool.query(sql, value);
}

export const updateData= (user_id, name,email) => {
    let updatedAt = new Date();
    const sql = "UPDATE users SET name = ?, email = ? where user_id = ?";
    const value = [name, email, user_id];
    const result = dbPool.query(sql, value);
    return result;
}

export const deleteData = (user_id) => {
    const sql = "DELETE FROM users where user_id = ?";
    const result = dbPool.query(sql, [user_id]);

    return result;
}

export const getUserById = async (id) => {
    const sql = 'SELECT * FROM users WHERE user_id = ?';
    const [users] = await dbPool.query(sql, [id]);
    return users;
}