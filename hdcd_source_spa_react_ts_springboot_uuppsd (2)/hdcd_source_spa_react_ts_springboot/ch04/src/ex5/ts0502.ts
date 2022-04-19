class Americano implements ICoffee {

    private name = "Americano";

    constructor() {

    }
    
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    display(): void {
        console.log(this.name);
    }
}
