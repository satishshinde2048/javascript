let person={
    fname:'satish',
    lname:'shinde',
    fullname:function(){
    let test=function(){
      console.log('this from fullname',this);
        console.log( `${this.fname} ${this.lname}`);
    }
    test();
  }

}
person.fullname();
