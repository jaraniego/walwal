import config from 'config';

module.exports = {
    client: 'pg',
    connection: {
        user: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.name'),
    }
}
