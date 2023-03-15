export class Auction {
    public type: string;
    
    constructor(type = 'running') {
        this.type = type;
    }
}