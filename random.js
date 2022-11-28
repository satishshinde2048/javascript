/*nput:
randomGame( )

Output:
It took 2 try/tries

Explanation:
The function picks a number between 0 and 1, 
after every 1 second, and if the number is greater than .45, 
then it prints the tries it took to get number greater than .45. As, the output here is , 
it took only one try to get number greater than .45. */
function randomGame(){
    let number;
    let time=0;
    let id=setInterval(()=>{
        number=Math.random();
        time++;
        if(number>.45){
            clearInterval(id);
            console.log(`It took ${time} try/tries`)
        }
    },1000)
}
randomGame();