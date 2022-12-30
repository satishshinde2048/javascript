/*function insertion(arr,element){
    for(i=arr.length-1;i>=0;i--)
    {
        arr[i+1]=arr[i];
        if(arr[i]==30){
         arr[i]=element;
         break;
        }
    }
}
let arr=[10,20,30,40,50];
insertion(arr,60);
console.log(arr);*/

function deletion(arr){
    for(i=1;i<arr.length;i++)
    {
        arr[i]=arr[i+1];
       
    }
    arr.length--;    

}
let arr1=[10,60,20,30,40,50];
deletion(arr1);
console.log(arr1);