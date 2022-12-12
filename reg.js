const str = 'def';
let pattern=/D/;
let result=pattern.test(str);
console.log(result);


//let pattern=/([0-9]+)([a-z]+)/g
function is_alphaNumeric(str){
    let pattern=/([0-9]+)([a-z]+)/g;
    result=pattern.test(str);
    if(result){
        console.log(result);
    }
    else{
        console.log(result);
    }
}
is_alphaNumeric("37828sad");
is_alphaNumeric("3243#$sew");

function vowel_count(str){
    let p=/[a,e,i,o,u]/gi;
    console.log(str.match(p).length);
}
vowel_count('The quick brown fox jumps over the lazy dog');

function is_hexcolor(str)
{
 regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  
        if (regexp.test(str))
          {
            console.log(true);
          }
        else
          {
            console.log(false);
          }
}
is_hexcolor("#444");
is_hexcolor("#33333");