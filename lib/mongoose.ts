import mongoose from 'mongoose';

import db from '@/configs/config.mongodb';
const { host, port, name } = db;
const connectString = `mongodb://${host}:${port}/${name}`;
const env = process.env.NODE_ENV || 'dev';

class Database {
  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    mongoose
      .connect(connectString, { maxPoolSize: 100 })
      // .then((_) => console.log(`Connected Mongodb Success: ${countConnect()}`))
      .catch((err) => console.log(`Error: ${err}`));

    if (env === 'dev') {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

export const instanceMongodb = Database.getInstance();
