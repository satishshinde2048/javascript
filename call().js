let person={
    fname:'satish',
    lname:'shinde'
}
function greeting(greet,symbol){
    return `${greet} ${this.fname} ${this.lname} ${symbol}`;
}
console.log(greeting.call(person,'hello','!'));
console.log(greeting.bind(person,'hello','!'));
