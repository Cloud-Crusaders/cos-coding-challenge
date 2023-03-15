import { ICarOnSaleClient } from '../interface/ICarOnSaleClient';
import { Auction } from './Auction';

export class CarOnSaleClient implements ICarOnSaleClient {
    getRunningAuctions(): Promise<Auction[]> {
        return new Promise(async resolve => {
            fetch(process.env.BASE_URL + '/auth')
            resolve([new Auction()])
        })
    }
}