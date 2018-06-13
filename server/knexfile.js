module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://admin:test@localhost/community-forum'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
