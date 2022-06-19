import { Container } from 'inversify';
import Knex from 'knex';
import config from 'config';
import Types from '../types';
import ProductDb from './product-db';

const DB_USERNAME: string = config.get('database.username');
const DB_PASSWORD: string = config.get('database.password');
const DB_NAME: string = config.get('database.name');

const container = new Container();

const knex = Knex({
    client: 'pg',
    connection: {
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME
    }
})

container.bind(Types.ProductDataSource).to(ProductDb);
container.bind(Types.Knex).toConstantValue(knex);


export default container;
