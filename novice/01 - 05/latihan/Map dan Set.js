let map = new Map();

map.set('1', 'str1');   
// a string key
map.set(1, 'num1');     
// a numeric key
map.set(true, 'bool1'); 
// a boolean key

alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); 
// 3

//Map can also object as keys
let john = {name : "John"};

// for every user, let's store their visits count
let visitsCountMap = new Map ();

//john is the key for the map
visitsCountMap.set (john, 123);

alert (visitsCountMap.get (john) );
//123