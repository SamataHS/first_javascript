class Human{
    name="sama";
    #wt;
    constructor(wt){
        // this.name = name;
        this.#wt = wt;
    }
    sayHello(){
        console.log("hello",this.name);
    }
    get fweight(){
        return this.#wt;
    }   
    set sweight(val){
        this.#wt = val;
    }

}
let sam= new Human(34);
sam.sweight=45;     //this setter should be assigned value like properties not as function call
console.log(sam.fweight); //getter call we should not call like fweight()
console.log(sam.name);
sam.name="san";
console.log(sam.name);