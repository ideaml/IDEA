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





let changevalues = {
    existLifeAXA:1,
    existLifeOther:2,
    existLife:3,
    timTDCAXA:'qwe',
    timTDCOther:3,
    timTDC:'r'
};
let AXA = ['existLifeAXA','existTDCAXA','existLMPAXA','timLifeAXA','timTDCAXA','timLMPAXA'];
let Other = ['existLifeOther','existTDCOther','existLMPOther','timLifeOther','timTDCOther','timLMPOther'];
let Total = ['existLife','existTDC','existLMP','timLife','timTDC','timLMP'];
console.log(changevalues);
console.time('isValid');

let size = AXA.length;
let isValid = true;
for (let i = 0; i < size; i++) {
    let keyAXA = AXA[i], keyOther = Other[i], keyTotal = Total[i];
    if(changevalues.hasOwnProperty(keyAXA) &&  changevalues.hasOwnProperty(keyOther) && changevalues.hasOwnProperty(keyTotal)){
        let valueAXA = Number(changevalues[keyAXA]);
        let valueOther = Number(changevalues[keyOther]);
        let valueTotal = Number(changevalues[keyTotal]); 
        console.log(valueAXA + valueOther);
        if(valueAXA + valueOther != valueTotal){
            isValid = false;
            break;
        }
    }
}
console.log(isValid);

console.timeEnd('isValid');
