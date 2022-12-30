function selection(arr){
    let i,j,min_index;
    let len=arr.length;
    for(i=0;i<len-1 ;i++){
        min_index=i;
        for(j=i+1;j<len;j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        swap(arr,min_index,i);
    }
}
function swap(arr,p,q){
    let temp=arr[p];
    arr[p]=arr[q];
    arr[q]=temp;
} 
let arr1=[23,11,4,18,6,231];
selection(arr1);
console.log(arr1);