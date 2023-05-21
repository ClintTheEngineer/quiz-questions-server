const Pool = require('pg').Pool
require('dotenv').config()

const devConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
};

const proConfig = {
    connectionString: process.env.URL 
};

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);




module.exports = pool;
