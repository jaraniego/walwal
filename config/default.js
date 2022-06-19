module.exports = {

    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,

        tables: {
            products: 'products'
        }
    }
}
