class Espresso {

    private _name = "Espresso";

    constructor() {
        
    }
    
    get name(): string {
        return this._name;
    }
    
    set name(name: string) {
        this._name = name;
    }
    
}
