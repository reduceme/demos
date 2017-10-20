/*function greeter(person: string) {
 return "Hello, " + person;
 }

 var user = "Jane User";
 document.body.innerHTML = greeter(user);*/
//接口
/*interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

var user = {firstName: "Jane", lastName: "User"};
document.body.innerHTML = greeter(user);*/
//类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
