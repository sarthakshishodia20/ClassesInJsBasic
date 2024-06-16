class Parent{
    hello(){
        console.log("hello !");
    }
}
class Child extends Parent{
    Hey(){
        console.log("hey");
    }
}
let obj=new Child();
console.log(obj);
console.log(obj.Hey());
console.log(obj.hello());



class Person{
    eat(){
        console.log("Eating...");
    }
    sleep(){
        console.log("Sleeping");
    }
}
class Engineer extends Person{
    work(){
        console.log("working...");
    }
}
class Doctor extends Person{
    PatientTreating(){
        console.log("checking Patient");
    }
}
let EngObj=new Engineer();
let DocObj=new Doctor();
console.log(EngObj);
console.log(EngObj.work());
console.log(EngObj.eat());
console.log(EngObj.sleep());
console.log(DocObj);
console.log(DocObj.PatientTreating());
console.log(DocObj.eat());
console.log(DocObj.sleep());

