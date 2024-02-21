let newDate = new Date(2038, 1, 19, 4, 7, 8,44,46);
console.log(newDate);

let yr = newDate.getFullYear();
console.log(yr);

let month = newDate.getMonth();
console.log(month);

let date = newDate.getDate();
console.log(date);

let day = newDate.getDay();
console.log(day);

let hours = newDate.getHours();
console.log(hours);

let minute = newDate.getMinutes();
console.log(minute);

let second = newDate.getSeconds();
console.log(second);

let millisecond= newDate.getMilliseconds();
console.log(millisecond);

let now = Date.now();
console.log (`The total millisecond passed are: &{now}`);

newDate.setFullYear(2012);
newDate.setMonth(6);
newDate.setDate(4);
newDate.setHours(7);
newDate.setMinutes(35);

console.log(newDate);

// let newDate = new Date();
// console.log("newDate");

// let newDate1 = new Date(2034,2, 22);
// console.log(newDate1);

// let newDate2 = new Date(2034,2,22,11,21,34,30);
// console.log(newDate2);

// let newDate3 = new Date(79,4,5);
// console.log(newDate3);

// let newDate4 = new Date(100000000);
// console.log(newDate4);

// let newDate0 = new Date();
// console.log(newDate0.toUTCString);

// let newDate5 = new Date();
// console.log(newDate5.toISOString);

// let newDate8= new Date(2067,8,6)
