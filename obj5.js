let names = { fname: "Dillion", lname: "Megida" }
function fullname(){
    return `${this.fname} ${this.lname}`;
}
console.log(fullname.call(names))