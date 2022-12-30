function linearsearch(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            console.log('element found');
            return;
        }
    }
   console.log('did not found');
}
let arr=[10,11,1,4,5,78,9];
linearsearch(arr,0);