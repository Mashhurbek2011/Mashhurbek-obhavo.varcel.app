const clock = document.querySelector(".cor2");


function timer() {
    let time = new Date();
    let hours = time.getHours().toString().padStart(2, "0")
    let minutes = time.getMinutes().toString().padStart(2, "0")

    const timerHours = `${hours} : ${minutes}`;

    clock.textContent = timerHours
}
setInterval(timer, 1000)
timer()