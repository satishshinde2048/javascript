/*Input:
countdown(4)

Output:
3 2 1 DONE

 */
function countdown(num){
    let id=setInterval(()=>{
        num--;
        if(num<=0){
            clearInterval(id);
            console.log('Done');
        }
        else
        {
            console.log(num);
        }
    },1000)
}
countdown(4);