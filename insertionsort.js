  function insertion(arr){
    let i,j,key;
    let len=arr.length;
    for(i=1;i<len;i++){
        key=arr[i];
        j=i-1;
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
   
  }
  let arr1=[3,2,4,3,8,5];
insertion(arr1);
console.log(arr1);