

const hr = document.querySelector('.hour')
const mn = document.querySelector('.minute')
const sec = document.querySelector('.sec')

function runwatch(){
    const todayDate  = new Date()
    setTimeout(runwatch, 1000)

    const Hh = todayDate.getHours()
    const mm = todayDate.getMinutes()
    const ss = todayDate.getSeconds()

    const HDeg = (Hh / 12) * 360
    hr.style.transform = `rotate(${HDeg}deg)`

    const mDeg = (mm / 60) * 360
    mn.style.transform = `rotate(${mDeg}deg)`

    const sDeg = (ss / 60) * 360
    sec.style.transform = `rotate(${sDeg}deg)`

    
}

runwatch()



