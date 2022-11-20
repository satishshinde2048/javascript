const config = {
    languages: [],
    set language(lang) {
    return this.languages.push(lang);
    },
    };
    
    console.log(config.language);


    const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
      };
      
      console.log(shape.diameter());
      console.log(shape.perimeter());

      let a=[[0, 1], [2, 3]];
      let r=a.reduce((acc, cur) => {
        return acc.concat(cur);
        },
        [1, 2],
        );
        console.log(r);

        const nums = [1, 2, 3];

nums.slice(0, 1)
nums.splice(0, 1)
nums.unshift(4)

console.log(nums);
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

const emojis = ['a', 'b', 'c', 'd'];

 

 //emojis.push('e');
 //emojis.splice(0, 2);
 //emojis = [...emojis, 'f'];
 emojis.length = 0;
 console.log(emojis);