import { IProduct } from '../models';

export interface IProductDataSource {
    create: (params: Partial<IProduct>) => Promise<IProduct>;
}
