import { Container } from 'inversify';
import { Knex } from 'knex';
import config from 'config';
import Types from '../types';

const knex = new Knex({
    client: 'pg',
    connection: {
        user: config.get('database.username'),
        password: config.get('database.password'),
        name: config.get('database.name'),
    }
})

container.bind(Types.Knex).toConstantValue(knex);

const container = new Container();

export default container;
