import CreateProduct from './';

describe('CreateProduct', () => {

    const mockProductDataSource = {
        create: jest.fn()
    }

    const mockId = 'some-id';

    const mockProduct = {
        id: mockId,
        name: 'Wallet',
        price: 100,
        stocks: 1000,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    const mockIdService = {
        generate: jest.fn()
    }

    const params = {
        name: mockProduct.name,
        price: mockProduct.price,
        stocks: mockProduct.stocks
    }

    beforeEach(() => {
        mockIdService.generate.mockReturnValue(mockId);
        mockProductDataSource.create.mockResolvedValue(mockProduct);
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    const getInstance = () => new CreateProduct(mockProductDataSource, mockIdService);

    it('returns a product object', async () => {
        const subject = getInstance();

        const res = await subject.execute(params);

        expect(res).toHaveProperty('name', params.name);
        expect(res).toHaveProperty('price', params.price);
        expect(res).toHaveProperty('stocks', params.stocks);
        expect(res).toHaveProperty('id');
        expect(res).toHaveProperty('createdAt');
        expect(res).toHaveProperty('updatedAt');
    });

    it('calls ProductDataSource#create', async () => {
        const subject = getInstance();
        await subject.execute(params);
        expect(mockProductDataSource.create).toHaveBeenCalled();
    });

    it('passes the right params to ProductDataSource#create', async () => {
        const subject = getInstance();
        await subject.execute(params);
        const args = mockProductDataSource.create.mock.calls[0][0];
        expect(args).toHaveProperty('name', params.name);
        expect(args).toHaveProperty('price', params.price);
        expect(args).toHaveProperty('stocks', params.stocks);
        expect(args).toHaveProperty('id', mockId);
    });

    it('fails when no name is present', async () => {
        const invalidParams = {
            ...params
        }

        delete invalidParams['name'];
        const subject = getInstance();
        try {

        await subject.execute(invalidParams);
        }
        catch(err) {
            expect(err).toHaveProperty('code', 'ValidationError');
            expect(err).toHaveProperty('message');
            return;
        }

        throw new Error('fail')
    })

})
