import container from '..';
import Types from '../../types';
import { validateProduct } from '../../../tests/assertions';

describe('ProductDb', () => {

    const knex = container.get(Types.Knex);

    describe('#create', () => {

        const params = {
            id: 'id',
            name: 'Wallet',
            price: 100,
            stocks: 10000,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),

        }

        it('returns a new product', async () => {
            const subject = container.get(Types.ProductDataSource);
            const res = await subject.create(params);
            validateProduct(res);
        })

    });

})
