import * as mysql from 'mysql';
import auth from '../config';
import Blogs from './blogs';

export const Connection = mysql.createConnection(auth.mysql);

export const Query = (query: string, values?: Array<number | string>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, [values], (err, results) => {
            if(err) console.log(err);
            return resolve(results);
        });
    });
};

export default {
    Blogs
};

