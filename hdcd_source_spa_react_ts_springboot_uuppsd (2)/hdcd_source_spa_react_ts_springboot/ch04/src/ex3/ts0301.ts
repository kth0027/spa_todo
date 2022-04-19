class Coffee {

    public name = "Coffee";

    constructor() {
        
    }
    
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    display() {
        console.log(this.name);
    }
}
