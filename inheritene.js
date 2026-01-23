const leanerna=class leaner{
    constructor(name,age){
        this.name=name.toUpperCase();;
        this.age=age;
    }
    greet(){
        return `hello ${this.name} and ${this.age}`
    }
}
class schoolstudent extends leanerna{
    constructor(name,age,standard){
        super(name,age)
        this.standard=standard;
    }
    intro(){
        
        return `school student:${super.greet()} hello ${this.name} and i'm studying ${this.standard} standard`
    }
}
class collage extends leanerna{
    constructor(name,age,year){
        super(name,age);
        this.year=year;
    }
    intro(){
        return `collage student:hello ${this.name} and i'm studying ${this.year} year`
    }
}
class workingpro extends leanerna{
    constructor(name,age,ex){
        super(name,age)
        this.ex=ex;
        
    }
    intro(){
            return `working profession:hello ${this.name} and i'm working ${this.ex} year experience`
    }
}
const student=new schoolstudent("kathir",9,"4th");
const colstd=new collage("bhuvn",18,"1st");
const working=new workingpro("suresh",23,4)
console.log(working.intro())
console.log(colstd.intro())
console.log(student.intro())