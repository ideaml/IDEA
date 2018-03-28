console.log("test");
var initData = () => {
    var arr = [];
    for (let i = 0; i < 100; i++) {
        var obj = {
            'year': i,
            'age': i.toString()
        }
        arr.push(obj);
    }
    return arr;
}

var isShown = (data) => {
    var year = data.year;
    return ((year <= 10 && year >= 1) || (year % 5 == 0 && year > 0));
};
var illustrations_init = (arr) => {
    return arr.filter(isShown);
}


var dataArr = initData();
dataArr.forEach(data => {
    if (isShown(data)) {
        console.log(data);
    }
});

var filterArr = illustrations_init(dataArr);
console.log(filterArr);

var homes = [{

    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"
 
 }, {
 
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"
 
 }, {
 
    "h_id": "5",
    "city": "bNew York",
    "state": "NY",
    "zip": "00010",
    "price": "962500"
 
 }];
var sortedArrInit = (arr) => {
    return arr.sort(function(a, b) {
        return a.city.toUpperCase()>b.city.toUpperCase();
    });
};
var sorterArr = sortedArrInit(homes);
console.log(sorterArr);
