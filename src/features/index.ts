import { Container } from 'inversify';
import Types from '../types';
import CreateProduct from './create-product';

const container = new Container();
container.bind(Types.CreateProduct).to(CreateProduct);

export default container;
