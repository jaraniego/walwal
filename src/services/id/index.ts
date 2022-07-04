import { injectable } from 'inversify';
import { IIdService } from './interface';

@injectable()
export default class IdService implements IIdService {

    generate() {
        const rand = Math.random() * 10000;
        return String(Math.floor(rand));
    }
}
