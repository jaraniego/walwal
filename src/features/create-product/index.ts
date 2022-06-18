import { IParams } from './params';
import { IResponse } from './response'
import { IProductDataSource } from '../../interfaces/data-sources';

export default class CreateProduct {

    constructor(
        private productDataSource: Pick<IProductDataSource, 'create'>,
        private idService: any,
    ) {
    }

    execute(params: Partial<IParams>) {
        if(!params.name) {
            throw {
                code: 'ValidationError',
                message: 'name is required'
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
