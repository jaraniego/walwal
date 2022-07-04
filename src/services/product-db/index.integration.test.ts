import container from '../../';
import Types from '../../types';
import { validateProduct } from '../../../tests/assertions';
import { Knex } from 'knex';
import config from 'config';
import { IProductDataSource } from '../../interfaces/data-sources';

const PRODUCTS_TABLE: string = config.get('database.tables.products');

describe('ProductDb', () => {

    const knex: Knex = container.get(Types.Knex);

    describe('#create', () => {

        const params = {
            name: 'Wallet',
            price: 100,
            stocks: 10000,

        }

        afterEach(async () => {
            await knex(PRODUCTS_TABLE).truncate();
        })

        it('returns a new product', async () => {
            const subject: IProductDataSource = container.get(Types.ProductDataSource);
            const res = await subject.create(params);

            validateProduct(res);
        });

        it('creates a database record', async () => {
            const subject: IProductDataSource = container.get(Types.ProductDataSource);
            await subject.create(params);
            const res = await knex(PRODUCTS_TABLE).select('*');
            expect(res.length).toEqual(1);
        });


    });

});
