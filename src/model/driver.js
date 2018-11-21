import knex from "knex";
import knexdb from "../knexdb";

const knexConfig = knex(knexdb);

const GET_DRIVER = 'SELECT * FROM drivertb';


class Driver{
    static async getAllDriver() {
        let results = await knexConfig.raw(GET_DRIVER);
        return results;
      }
    }
    
    export default Driver;