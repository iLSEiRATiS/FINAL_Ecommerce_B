// src/config/db.js
const mongoose = require('mongoose');

async function connectDB() {
  const { MONGODB_URI, DB_NAME } = process.env;

  if (!MONGODB_URI || MONGODB_URI.trim() === '') {
    throw new Error('Falta MONGODB_URI');
  }

  const dbName = (DB_NAME && DB_NAME.trim()) ? DB_NAME.trim() : 'cotistore';

  try {
    const conn = await mongoose.connect(MONGODB_URI, { dbName });
    console.log(`✅ Mongo conectado → host=${conn.connection.host} db=${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err?.message || err);
    throw err;
  }
}

module.exports = connectDB;
