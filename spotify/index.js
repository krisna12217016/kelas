import express from 'express';
import * as SongsModels from './models/songs_model.js';

const app = express(); 
const port = 8080;
const host = "localhost";

app.use(express.json());

app.get('/songs', SongsModels.getSongs); 
app.post('/songs', SongsModels.addSongs);

app.listen(port, host, () => {
    console.log(`server REST API berjalan di http://${host}:${port}`);
});