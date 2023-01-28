const person={
    name:'karan',
    location:'Delhi',
    greet(){
        console.log('Hi'+this.name);
    } 
}
// const printName=(persondata)=>{
//     console.log(persondata.name)
// }
// printName(person);
const{name, location}=person;
console.log(location);