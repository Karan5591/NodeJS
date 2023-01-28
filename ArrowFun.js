const student={
    StuName:"Karan",
    rollNo: 20,
    greet(){
        console.log(`Hi, I am ${this.StuName}`)
    }
};
let hobbies=['sports', 'cooking']
let h1=hobbies.map((hobby)=>{
return ("hobbies: "+hobby);

});
console.log(h1);
hobbies.push('cycling');
console.log(h1);
console.log(hobbies);