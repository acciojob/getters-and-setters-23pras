//complete this code
class Person {
	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}
	get name(): string {
		return this._name;
	}
	set age(age: number){
		this._age = age;
	}
}

class Student extends Person {
	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}
	
	study(){
		return `${this._name} is studying`
	}
}

class Teacher extends Person {
	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}
	teach(){
		return `${this._name} is teaching`
	}

}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
