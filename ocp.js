const roles = ["ADMIN", "USER"]
checkRole = (user) => {
  if(roles.includes(user.role)){
    return true; 
  }else{
    return false
  }
}

//Test role
let a=checkRole("ADMIN"); //true)
console.log(a);
checkRole("Foo"); //false