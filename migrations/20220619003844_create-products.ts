import { Knex } from "knex";
import config from 'config';

const PRODUCTS_TABLE: string = config.get('database.tables.products');


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        create table ${PRODUCTS_TABLE}(
            id serial primary key,
            name text unique not null,
            price decimal not null,
            stocks integer not null,
            created_at timestamptz default now(),
            updated_at timestamptz default now()
        )
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        drop table ${PRODUCTS_TABLE};
    `);
}

