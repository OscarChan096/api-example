import mysql from "promise-mysql";
import configdb from "./Constants";

const connection = mysql.createConnection({
    database: configdb.DB,
    user: configdb.USER,
    password: configdb.PASSWORD,
    host: configdb.HOST
});

const getConnection = () => {
    return connection
}

module.exports = {
    getConnection
}