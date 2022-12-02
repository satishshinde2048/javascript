function Person(first, last, age, eyecolor){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

Person.prototype.name = function() {
	return this.firstName + " " +this.lastName;
};
let obj=new Person('satish','shinde',23,'red');
console.log(obj.name());
console.log(obj.nationality);
console.log(obj.age);