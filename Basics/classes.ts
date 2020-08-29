class Employee{

    constructor(private firstname : string, private secondname : string, public age : number, readonly salary : number){

    }

    public getFirstname():string{
        return this.firstname;
    }

    public setFirstname(fname :string){
        this.firstname = fname;
    }

    public getSecondtname():string{
        return this.secondname;
    }

    public setSecondname(sname :string){
        this.secondname = sname;
    }

    getEmployeeDesignation() : string {
        return "I am a Employee";
        
    }
}


console.log("********************************************************************************");
console.log("*                             Object Creation                                  *");
console.log("********************************************************************************");
var emp1 = new Employee("Christon","Cardoza",24,60000);
console.log(emp1);
console.log("--------- Setting up new age ---------")
emp1.age = 25;
console.log("--------- The updated employee age  ---------")
console.log(emp1);
console.log("--------- Warning!!! You can't assign values for private & readonly member  ---------");
console.log("Employee's readonly Salary : ",emp1.salary)


console.log("********************************************************************************");
console.log("*                             Getter & Setter                                  *");
console.log("********************************************************************************");
console.log("Employee's Firstname : "+emp1.getFirstname());
console.log("Employee's Secondname : "+emp1.getSecondtname());
console.log("--------- Setting up new names ---------")
emp1.setFirstname("Antony");
emp1.setSecondname("D'souza");
console.log(emp1);
console.log("--------- The updated employee name  ---------")
console.log("Employee's Firstname : "+emp1.getFirstname());
console.log("Employee's Secondname : "+emp1.getSecondtname());


console.log("********************************************************************************");
console.log("*                             Inheritance                                      *");
console.log("********************************************************************************");
class Programmer extends Employee{

    constructor(private fname : string,private sname : string,public ag : number,readonly sal : number,protected certificate : string){
        super(fname,sname,ag,sal)
    }

    getEmployeeDesignation(): string{
        return "I am a Programmer";
        
    }

    myDesignation(): string {
        return this.getEmployeeDesignation();
    }

    getParentDesignation() : string{
        return super.getEmployeeDesignation();
    }

    public getCertificate():string{
        return this.certificate;
    }
        

}

var progamer = new Programmer("Christon","Cardoza",24,100000,"AWS")
console.log("Progamer's Firstname : "+progamer.getFirstname());
console.log("Progamer's Secondname : "+progamer.getSecondtname());
console.log("Progamer's Certificate : "+progamer.getCertificate());
console.log("Employee's Designation : "+progamer.getEmployeeDesignation());
console.log("Programer's Designation : "+progamer.myDesignation());
console.log("Parent's Designation : "+progamer.getParentDesignation());


console.log("********************************************************************************");
console.log("*                               Polymorphism                                   *");
console.log("********************************************************************************");
var progamer2 : Employee = new Programmer("Christon","Cardoza",24,100000,"AWS")
console.log("Progamer's Firstname : "+progamer2.getFirstname());
console.log("Progamer's Secondname : "+progamer2.getSecondtname());
console.log("Employee's Designation : "+progamer2.getEmployeeDesignation());
console.log("--------- Warning!!! Programmer2 can't access methods :getCertificate,myDesignation,getParentDesignation from Programmer class since its of type Employee ---------");


console.log("********************************************************************************");
console.log("*                        Inheritance & Duck Typing                             *");
console.log("********************************************************************************");
interface Human{
    firstname : string;
    lastname : string;
    getFullname () : string;
}
class Person implements Human{
    firstname: string;    
    lastname: string;
    getFullname(): string {
        return this.firstname + this.lastname;
    }   
}
var man : Human = new Person();
var dude = {
    firstname : "Christon ",
    lastname: "Cardoza",
    occupation : 'Sofware Engineer',
    getFullname :function(){ return this.firstname + this.lastname} 

}

man = dude
console.log("Man's Firstname : "+man.firstname);
console.log("Man's Laststname : "+man.lastname);
console.log("Man's Fullname : "+man.getFullname());
console.log("--------- Warning!!! man can't access occupation from Dude object and all the memmber of man should present in Dude ---------");




