/** var nums:string []=["a1","a2","a3"];
console.log("using foreach");
nums.forEach(element=>{
    console.log(element);
});
console.log("using for");
for(let index=0;index<SVGAnimatedNumberList.length;index++){
    console.log(nums[index]);
}*/
//tuples
var atuple=[1,"hi",[1,2,3],{key:'value'}];
atuple.forEach(item=>{
    if(typeof item=='number'){
    console.log('Item: '+item+'is of type number');
    }
    if(typeof(item)=='object'){
        try {
            var temp:Array<number>=<Array<number>>(item);
            console.log('Item: '+item+'is of type array');
            console.log(temp);
        } catch (error)
        {
            console.log("the item is not in array");
        }
    }
})
//unions
function unionFunction(pParameter:string|string[]){
    console.log(pParameter);
}
unionFunction("welcome");
unionFunction(["a","b"]);