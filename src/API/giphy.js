import dotenv from 'dotenv'
dotenv.config();

const key = 'fgqeu0D5qhNe3XPLqHyhNsHJlyAM77MR'
export const giphy = "api.giphy.com/v1/gifs";
export const random = `random?api_key=${key}&rating=R&limit=5`;
export const search = `search?api_key=${key}&limit=50&rating=PG-13&q=`;
export const translate = `translate?api_key=${key}&limit=50&rating=PG-13&s=`;
export const trending = `trending?api_key=${key}&limit=100&rating=PG-13`;
