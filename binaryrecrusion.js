function binarysearch(arr,left,right,element){
    if(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==element){
            console.log (mid);
        }
        else if(arr[mid]>element){
            binarysearch(arr,left,mid-1,element);
        }
        else{
            binarysearch(arr,mid+1,right,element);
        }
    }
}
let arr=[2,3,4,6,8,9]
binarysearch(arr,0,5,8);