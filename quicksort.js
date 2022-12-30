function quicksort(arr,left,right){
    if(left<right){
        let p=partition(arr,left,right);
        quicksort(arr,left,p-1);
        quicksort(arr,p+1,right);
    }

}
function partition(arr,left,right){
    let pivot=arr[right];
    let i=left-1;
    for(j=left;j<=right-1;j++){ 
        if(arr[j]<pivot){
            i++;
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    } 
        let temp=arr[i+1];
        arr[i+1]=arr[right];
        arr[right]=temp;
        return i+1; 
}
let arr1= [10, 7, 8, 9, 1, 5];;
quicksort(arr1,0,arr1.length-1);
console.log(arr1);