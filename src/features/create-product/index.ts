import { IParams } from './params';
import { IResponse } from './response'
import { IProductDataSource } from '../../interfaces/data-sources';
import schema from './schema';

export default class CreateProduct {

    constructor(
        private productDataSource: Pick<IProductDataSource, 'create'>,
        private idService: any,
    ) {
    }

    execute(params: Partial<IParams>) {
        const err = schema.validate(params);
        if(err.error) {
            throw {
                code: 'ValidationError',
                message: err.error.details[0].message
            }
        }

        return this.productDataSource.create({
            name: params.name,
            price: params.price,
            stocks: params.stocks,
            id: this.idService.generate(),
        });
    }

}
