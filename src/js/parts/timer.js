function timer(){
    let deadline = '2020-10-21';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24) ,
            days = Math.floor((t/(1000*60*60*24)));
        if (t > 0){
            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }else{
            return {
                'total' : +'0',
                'days' : +'0',
                'hours' : +'0',
                'minutes' : +'0',
                'seconds' : +'0'
            };
        }
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);

            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else {
                return num;
                }
            }

            days.textContent = addZero(t.days) + " дней";
            hours.textContent = addZero(t.hours) + " часов";
            minutes.textContent = addZero(t.minutes) + " минут";
            seconds.textContent = addZero(t.seconds) + " секунд";

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
}

module.exports = timer;