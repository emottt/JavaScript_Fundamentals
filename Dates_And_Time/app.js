 let val;

 const today = new Date();
 let birthday = new Date('10-2-1979');
 birthday = new Date('October 2 1979');
 birthday = new Date('10/2/1979');

 val = today.getMonth();
 val = today.getDate();
 val = today.getDay();
 val = today.getFullYear();
 val = today.getHours();
 val = today.getMinutes();
 val = today.getSeconds();
 val = today.getMilliseconds();
 val = today.getTime();

 birthday.setMonth(2);
 birthday.setDate(12);
 birthday.setFullYear(1980);
 birthday.setHours(3);
 birthday.setMinutes(30);
 birthday.setSeconds(4);

 console.log(birthday);
 console.log(val);