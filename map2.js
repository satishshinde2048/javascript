/*Input:
const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];

Output:
[ { id: 0, hero: 'Spider-Man' }, { id: 1, hero: 'Thor' }, { id: 2, hero: 'Black Panther' }, { id: 3, hero: 'Captain Marvel' }, { id: 4, hero: 'Silver Surfer' } ]*/
const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
let result=heros.map((hero,index)=>{return { id:index,hero:hero.name}});
console.log(result);