import { ICarOnSaleClient } from '../interface/ICarOnSaleClient';
import { Auction } from './Auction';

export class CarOnSaleClient implements ICarOnSaleClient {
    getRunningAuctions(): Promise<Auction[]> {
        return new Promise(resolve => {
            resolve([new Auction()])
        })
    }
}