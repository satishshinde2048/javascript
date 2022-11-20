/*reate a new object called person and give it properties like name, jobTitle, email, isVerified (boolean, value = false) (Create operation)
Print only the name and the verified status of the person. (Read operation)
Change the isVerified status to true. (Update operation)
Remove the property name and add two new properties firstName and lastName (Delete operation)
Print the final object person.
Example 1:
Input:
let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}

Output:
John false { JobTitle: 'Developer', email: 'almabetter.com', isVerified: true, firstName: 'John'*/ 
let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}
console.log(person.name,person.isVerified);
person.isVerified=true;
delete person.name;
person.firstname='John';
person.lastname='Snow';
console.log(person);