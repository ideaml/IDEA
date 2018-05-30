console.time('split');

let returnObject = {};
let keys = ['AXA','Other'];
let keyIndex = 0;
let totalItemId = '' ,mappingItemId = '';
keys.every((key,i) => {
    console.log(key,i);    
    if(itemId.indexOf(key)>=0){
        totalItemId = itemId.split(key)[0];
        keyIndex = i;
        console.log('reslut:',totalItemId,keyIndex);   
        return false;
    }
    return true;    
});
mappingItemId = (totalItemId) ? totalItemId+keys[(keyIndex+1)%2] : '';
let obj = (mappingItemId) ? {itemId,mappingItemId,totalItemId} : null;

console.log(obj);
console.timeEnd('split');
