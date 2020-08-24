// Date objek dengan jumlah milidekit (1/1000 detik) yang berlalusetelah 1 Jan 1970 UTC + 0

//00 means 01.01.1970 UTC + 0
let Jan01_1970 = DAte(0);
alert (Jan01_1970);

// now add 24 jam, get 02.01.1970 TUC + 0
let Jan02_1970 = new Date (24 * 3600 * 1000);
alert (Jan02_1970);

// //import alert from 'alert-node'
// let date = new Date(2012, 0, 3); // 3 Jan 2012
// console.log((getWeekDay(date))); // should output "TU"

var popup = require('popups');

popup.alert({
    content: 'Hello!'
});