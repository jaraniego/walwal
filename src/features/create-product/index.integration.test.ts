import container from '../../';
import Types from '../../types';
import CreateProduct from './';
import { validateProduct } from '../../../tests/assertions';
import { IProductDataSource } from '../../interfaces/data-sources';

describe('CreateProduct', () => {

    const productDataSource: IProductDataSource = container.get(Types.ProductDataSource);

    const params = {
        name: 'Wallet',
        price: 100,
        stocks: 200
    }

    afterEach(async () => {
        await productDataSource.truncate();
    });

    it('creates a product', async () => {
        const subject: CreateProduct = container.get(Types.CreateProduct)
        const res = await subject.execute(params);
        validateProduct(res);
    })

});
