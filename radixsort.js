function radixsort(arr){
 let max=Math.max(...arr);
 let exp=1;
 while(exp<=max){
    countingsort(arr,exp);
    exp*=10;
 }
 function countingsort(arr,exp){
    let   k=10;
    let count=[];
    for(let i=0;i<k;i++){
        count[i]=0; 
    }
    for(let i=0;i<arr.length;i++){
        count[parseInt((arr[i]/exp)%10)]++;
    }
    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }
    let output=[];
    for(let i=arr.length-1;i>=0;i--){
        output[count[parseInt((arr[i]/exp)%10)]-1]=arr[i];
        count[parseInt((arr[i]/exp)%10)]--;
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
  }
}
}
let arr=[170, 45, 75, 90, 802, 24, 2, 66];;
radixsort(arr);
console.log(arr);
