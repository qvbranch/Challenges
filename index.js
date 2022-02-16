const clockTitle = document.querySelector(".js-clock");

function getTime(){
    const today = new Date();
    const xmasDate = new Date('2022-12-25T00:00:00');

    const untilDays = xmasDate.getTime()-today.getTime();

    const day = Math.floor(untilDays / (1000*60*60*24));
    const hours = Math.floor((untilDays % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((untilDays % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((untilDays % (1000*60)) / 1000);

    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getTime();
setInterval(getTime, 1000);
