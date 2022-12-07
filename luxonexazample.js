let a=luxon.DateTime.now(); //=> '2017-09-14T03:20:34.091-04:00';
console.log(a);
console.log(luxon. DateTime.fromObject({day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng'}))
console.log(luxon.DateTime.fromISO("2017-05-15") );
dt = luxon.DateTime.now();
console.log(dt.year);     //=> 2017
console.log(dt.month) ;   //=> 9
console.log(dt.day ) ;    //=> 14
console.log(dt.second ) ; //=> 47
console.log(dt.weekday);  //=> 4
console.log(dt.toLocaleString());