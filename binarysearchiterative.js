function binarysearch(arr,element){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        mid=Math.floor((right+left)/2);
        if(arr[mid]==element){
            return mid;
        }
        else if(arr[mid]>element){
            right=mid-1;
        }
        else{
             left=mid+1;
        }
    }
}
let arr=[2,3,4,6,8,9]
console.log(binarysearch(arr,8));


