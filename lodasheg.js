console.log(_.compact([0, 1, false, 2, '', 3]));
console.log(_.difference([2, 1], [2, 3]));
console.log(_.intersection([2, 1], [2, 3]));
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array); 
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  _.filter(users, function(o) { return !o.active; });
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  console.log(_.filter(users, { 'age': 36, 'active': true }));

