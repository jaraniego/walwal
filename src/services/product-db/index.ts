import { inject, injectable } from 'inversify';
import { IProductDataSource } from '../../interfaces/data-sources';
import config from 'config';
import { Knex } from 'knex';

const PRODUCTS_TABLE: string = config.get('database.tables.products');

@injectable()
export default class ProductDb implements IProductDataSource {

    constructor(
        @inject(Types.Knex) private knex: Knex
    ) {

    }

    create(params: Partial<IProduct>) {
        return this.knex(PRODUCTS_TABLE).insert(params);
    }
}
