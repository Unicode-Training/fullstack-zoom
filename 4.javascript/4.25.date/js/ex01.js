// const date = new Date("2026-11-09T09:48:00");
// console.dir(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// date.setDate(10);
// console.dir(date);
// console.log(date.getDay());

const endTime = '2026-11-15 09:30:45';
const endTimeObj = new Date(endTime);
setInterval(() => {
    const nowObj = new Date();

    const endTimestamp = endTimeObj.getTime();
    const nowTimestamp = nowObj.getTime();

    let diff = (endTimestamp - nowTimestamp) / 1000;

    const days = Math.floor(diff / 86400);
    diff -= days * 86400;

    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;

    const mins = Math.floor(diff / 60);
    diff -= mins * 60;

    const seconds = Math.floor(diff);

    // console.log(days, hours, mins, seconds);

    document.body.innerHTML = `<h1>${days}:${hours}:${mins}:${seconds}</h1>`

}, 1000);

