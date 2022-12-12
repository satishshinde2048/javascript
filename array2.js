let arr=[1,2,3,4];
Array.prototype.isgretherthan=function(lim){
 return this.length>lim;
}
//let obj=new arr(2,4,6,7);
console.log(arr.isgretherthan(5));