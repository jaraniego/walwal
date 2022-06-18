import { IProduct } from '../models';

export interface IProductDataSource {
    create: (params: Partial<IProduct>) => Promise<IProduct>
    update: (params: Partial<IProduct>) => Promise<IProduct>
    get: (params: Partial<IProduct>) => Promise<IProduct>
}
