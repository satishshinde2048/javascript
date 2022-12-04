function test(lang,name){
    if(lang==='hindi'){
        return function(){
            console.log('namste'+name);
        }
    }
    else{
        return function(){
            console.log('hello'+name);  
        }
    }
}
test('hindi','satish')();
test('english','raj')();