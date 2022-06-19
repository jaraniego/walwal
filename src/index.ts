import 'reflect-metadata';
import { Container } from 'inversify';
import serviceContainer from './services';
import featuresContainer from './features';

export default Container.merge(featuresContainer, serviceContainer);
