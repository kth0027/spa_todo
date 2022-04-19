class EspressoMachine {

    private price: number = 300000;

    static count: number = 0;

    constructor() {
        
    }
    
    getPrice(): number {
        return this.price;
    }
    
    setPrice(price: number): void {
        this.price = price;
    }
    
    static getCount(): number {
        return EspressoMachine.count++;
    }
}
