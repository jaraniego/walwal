import { injectable, inject } from 'inversify';
import Types from '../../types';
import { IParams } from './params';
import { IResponse } from './response'
import { IProductDataSource } from '../../interfaces/data-sources';
import { IIdService } from '../../services/id/interface';
import schema from './schema';

@injectable()
export default class CreateProduct {

    constructor(
        @inject(Types.ProductDataSource ) private productDataSource: Pick<IProductDataSource, 'create'>,
        @inject(Types.IdService) private idService: IIdService,
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
