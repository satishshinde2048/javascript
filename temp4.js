const people = [{id:1, name:"John"}, {id:2, name:"Alice"}];
const address = [{id:1, peopleId: 1, address: 'Some street 1'}, {id:2, peopleId: 2, address: 'Some street 2'}]

let op = people.map((e,i)=>{
  let temp = address.find(element=> element.id === e.id)
  if(temp.address) {
    e.address = temp.address;
  }
  return e;
})
console.log(op);