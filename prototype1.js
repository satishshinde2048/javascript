arr=[1,2,3,4,5,6];
arr1=[4,5,6,7];
Array.prototype.isgreaterthan=function(limit){
    return this.length>limit;
}
console.log(arr.isgreaterthan(5));
console.log(arr1.isgreaterthan(5));