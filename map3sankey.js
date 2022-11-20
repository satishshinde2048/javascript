/*1. Given two array of object

names = [
          {name:"raju",
           roll:1},
          {name:"ram",
           roll:2}
        ]

score = [
          {score:9,
            roll:1},
          {score:10,
           roll:2}
        ]

map the score and with the name and roll number.
Expected Result :
Result = [
          {score:9,
            name:"raju",
            roll:1},
          {score:10,
            name:"ram"
           roll:2}
         ]
(Try to create an algorithm that runs in O(n) time complexity)*/
let names = [
    {name:"raju",
     roll:1},
    {name:"ram",
     roll:2}
  ]
  score = [
    {score:9,
      roll:1},
    {score:10,
     roll:2}
  ]


    let op= names.map((e,i)=>{
    let temp = score.find(element=> element.roll === e.roll)
    if(temp.score) {
      e.score= temp.score;
    }
    return e;
  });
  console.log(op);