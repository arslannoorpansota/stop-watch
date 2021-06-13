//References
let p = document.querySelector('p')
let elem = document.querySelector('main')
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
    if (btn1.textContent == 'Start') {
        start_time = new Date();
        btn1.textContent = 'Stop'
        update = setInterval(display, 10);
    }
    //onStop
    else if (btn1.textContent == 'Stop') {
        clearInterval(update);
        btn1.textContent = 'Resume'
        stoped_time1 = new Date()
        display()

    }
    //onResume
    else {
        stoppedDuration += (new Date() - stoped_time1);
        btn1.textContent = 'Stop'
        update = setInterval(display, 10);

    }

}

function reset() {
    clearInterval(update);
    btn1.disabled = false;
    start_time = new Date();
    stoped_time1 = null;
    stoppedDuration = 0;
    btn1.textContent = 'Start'
    display()

}


document.onfullscreenchange = function ( event ) {
    if (document.fullscreenElement) {
        document.querySelector('.togglebtn').innerHTML = '<img src="download.png" />'
    } else {
        document.querySelector('.togglebtn').innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAK0lEQVR4AWNAgFEwCv6jQnxyQ9MgAoBog0YNGoJgFNAxHY0aNBKK2lEwCgCCjZtl7xalSwAAAABJRU5ErkJggg==" />';
    }
};

//toggle function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().then(function () {
                // document.querySelector('.togglebtn').innerHTML = '<img src="download.png" />'
            }, function () {
                console.log("Cant do full screen")
            })
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }


    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(function () {
                // document.querySelector('.togglebtn').innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAK0lEQVR4AWNAgFEwCv6jQnxyQ9MgAoBog0YNGoJgFNAxHY0aNBKK2lEwCgCCjZtl7xalSwAAAABJRU5ErkJggg==" />';
            });
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }


    }
}

