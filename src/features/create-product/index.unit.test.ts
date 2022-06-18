import CreateProduct from './';

describe('CreateProduct', () => {

    const params = {
        name: 'Wallet',
        price: 100,
        stocks: 1000
    }

    it('returns a product object', async () => {
        const subject = new CreateProduct();

        const res = await subject.execute(params);
        expect(res).toHaveProperty('name', params.name);
        expect(res).toHaveProperty('price', params.price);
        expect(res).toHaveProperty('stocks', params.stocks);
    });

})
