const moment = require('moment'); 

console.log(); 
console.log('This moment:'); console.log 
(moment()); 
console.log('January 1st:'); 
console.log(moment('20230101')); 
console.log('This moment in American format:'); console.log 
(moment().format('MMMM Do YYYY, h:mm:ss a')); 
console.log();
console.log('January 1st this year in American format:');
console.log(moment().startOf('year').format('MMMM Do YYYY, h:mm:ss a'));
console.log('June 1st this year in American format (without time):');
console.log(moment().month(5).startOf('month').format('MMMM Do YYYY'));
const birthday = moment('20050412', 'YYYYMMDD'); 
console.log(`${birthday.fromNow(true)} have passed since your birthday.`);
console.log('Distance from birthday to this moment:');
console.log('A date 30 days from now in the format "dMyyyy":');
console.log(moment().add(30, 'days').format('DMMYYYY'));