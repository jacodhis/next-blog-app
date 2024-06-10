import mysql from 'mysql2/promise';

export default async function dbConn({query,values=[]}) {

    let dbConnection = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });
    try {
        const [data] = await dbConnection.execute(query,values)
        dbConnection.end();
        return data
    } catch (error) {
        console.log(error)
    } 
}
