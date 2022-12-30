function countingsort(arr,k){

    let count=[];
    for(let i=0;i<k;i++){
        count[i]=0; 
    }
    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
    }
    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }
    let output=[];
    for(let i=arr.length-1;i>=0;i--){
        output[count[arr[i]]-1]=arr[i];
        count[arr[i]]--;
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
  }
  console.log(arr);
}
let arr=[4,5,1,3,2,0,3,5];
countingsort(arr,6);
//console.log(arr);