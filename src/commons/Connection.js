import mysql from "promise-mysql";
import configdb from "./Constants";

const connection = mysql.createConnection({
    host: configdb.HOST,
    database: configdb.DB,
    user: configdb.USER,
    password: configdb.PASSWORD
});

const getConnection = () => {
    return connection
}

module.exports = {
    getConnection
}