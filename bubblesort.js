function bubble(arr){
    let i,j;
    
    let len=arr.length;
    for(i=0;i<len-1;i++){
        let isswaped=false;
        for(j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isswaped=true;
            }
        }
        if(!isswaped){
            break;
        }
    }
}
let arr1=[23,123,12,-4,47,15,-16];
console.log('unsorted array:',arr1);
bubble(arr1);
console.log('sorted array:',arr1);