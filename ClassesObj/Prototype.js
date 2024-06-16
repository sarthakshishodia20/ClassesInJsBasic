const Employee={
    name:"Shraddha Khapra",
    marks:90,
    printMarks:function printMarks(){
        console.log("Marks are",this.marks);
    }
}
console.log(Employee);

const Labour={
    name:"Sarthak Shishodia",
    marks:100,
}

// using prototypes we can use the properties of another object like in this case
Labour.__proto__=Employee;
console.log(Labour);
console.log(Labour.printMarks);


