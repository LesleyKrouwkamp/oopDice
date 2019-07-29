module.exports = class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age  = age;
        this.gender = gender;
        this.interests = interests;
    }
    
    sayHello(){
    console.log(`Hello I am ${this.name} 
    and I am a ${this.age} year old ${this.gender} 
    I have interests in ${this.interests}`);
        
//        console.log("Hello I am " + this.name + " ,and I am a " + this.age  + " year old " + this.gender + " i have interests in " + this.inerests);
}
}
 
    