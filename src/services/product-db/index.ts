import { inject, injectable } from 'inversify';
import { IProductDataSource } from '../../interfaces/data-sources';
import type { IProduct } from '../../interfaces/models';
import config from 'config';
import Types from '../../types';
import { Knex } from 'knex';
import { camelCase, snakeCase } from 'lodash';

const PRODUCTS_TABLE: string = config.get('database.tables.products');

@injectable()
export default class ProductDb implements IProductDataSource {

    constructor(
        @inject(Types.Knex) private knex: Knex
    ) {

    }

    async truncate() {
        return this.knex(PRODUCTS_TABLE).truncate();
    }

    async create(params: Partial<IProduct>) {
        const formattedParams: any = {};
        Object.keys(params).forEach(key => {
            formattedParams[snakeCase(key)] = params[key as keyof IProduct];
        });
        const res: IProduct[] = await this.knex(PRODUCTS_TABLE).insert(formattedParams).returning('*') as IProduct[]
        return res.map(r => {
            const obj: any = {};
            Object.keys(r).forEach(k => {
                obj[camelCase(k)] = r[k as keyof IProduct];
            });
            return obj;
        })[0];
    }
}
