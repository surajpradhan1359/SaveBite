   export function calculateRemainingTime(sec) {
        let min = Math.floor(sec / 60);
        let hr = 0;
        if(min >= 60){
            hr = Math.floor(min / 60);
            min = min % 60;
        }
        let remaingSec = sec % 60;
        console.log(hr, min, remaingSec);
        return `${hr}h ${min}m ${remaingSec}s`;
    }