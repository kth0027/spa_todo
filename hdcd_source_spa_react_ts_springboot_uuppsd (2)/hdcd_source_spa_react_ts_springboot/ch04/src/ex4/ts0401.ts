abstract class AbstractCoffee {

    protected name = "Coffee";

    constructor() {
        
    }
    
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    abstract display(): void;
}
