const dev = {
  app: {
    port: process.env.NEXT_PUBLIC_DEV_APP_PORT || 3070,
  },
  db: {
    host: process.env.NEXT_PUBLIC_DEV_DB_HOST || '127.0.0.1',
    port: process.env.NEXT_PUBLIC_DEV_DB_PORT || '27017',
    name: process.env.NEXT_PUBLIC_DEV_DB_NAME || 'dev',
  },
};

const production = {
  app: {
    port: process.env.NEXT_PUBLIC_PRO_APP_PORT || 3000,
  },
  db: {
    host: process.env.NEXT_PUBLIC_PRO_DB_HOST || '127.0.0.1',
    port: process.env.NEXT_PUBLIC_PRO_DB_PORT || '27017',
    name: process.env.NEXT_PUBLIC_PRO_DB_NAME || 'pro',
  },
};

const config = { dev, production };
const env = process.env.NEXT_PUBLIC_NODE_ENV || 'dev';

export default config[env];
