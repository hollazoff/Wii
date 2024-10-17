
export class Shop extends Object{

    Name = ''




    constructor(Name){

        super();
        this.Name = Name;

    }

    penis(){
        console.log(this.Name)
    }

}
export let shop1 = new Shop("MARIO GALAXY");
export let shop2 = new Shop("BLASTER MASTER");
export let shop3 = new Shop("CONTRA");