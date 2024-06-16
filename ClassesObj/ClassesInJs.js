class ToyotaCar{
    constructor(brand,mielage){
        console.log("Creating Constructor");
        this.brand=brand;
        this.mielage=mielage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}

let fortuner=new ToyotaCar("Fortuner",200);
console.log(fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());
let nexon=new ToyotaCar("Tata Nexon",300);
console.log(nexon);
console.log(nexon.start());
console.log(nexon.stop());


