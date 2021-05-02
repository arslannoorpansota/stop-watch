//References
let p = document.querySelector('p')
let update;
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
//BeforeStartclear
let start_time = new Date();
let stoped_time1 = null;
let stoppedDuration = 0;
display()

function display() {

    current_time = new Date()
    let elapsed_time = new Date(current_time - start_time - stoppedDuration)
    let elapsed_sec = elapsed_time.getSeconds() > 9 ? elapsed_time.getSeconds() : "0" + elapsed_time.getSeconds()
    let elapsed_milli = Math.round(elapsed_time.getMilliseconds() / 10)
    let elapsed = elapsed_milli > 9 ? elapsed_milli : "0" + elapsed_milli
    p.textContent = `${elapsed_sec} : ${elapsed}`

}
//onStart

function start() {
    if (stoped_time1 == null) {
        start_time = new Date();
    }
    //onResume
    else {
        stoppedDuration += (new Date() - stoped_time1);
        btn1.textContent = 'Start'
        btn2.disabled = false;


    }
    update = setInterval(display, 10);
    btn1.disabled = true
}

//onStop
function stop() {
    clearInterval(update);
    btn1.disabled = false;
    btn1.textContent = 'Resume'
    btn2.disabled = true;
    stoped_time1 = new Date()

}
function reset() {
    clearInterval(update);
    btn1.disabled = false;
    start_time = new Date();
    stoped_time1 = null;
    stoppedDuration = 0;
    btn1.textContent = 'Start'
    btn2.disabled = false;
    display()



}
