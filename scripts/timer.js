class Countdown_Timer {
    constructor(date) {
        this.date = date;
    }

    time_left() {
        let now = new Date().getTime();
        let distance = this.date.getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return [distance <= 0, (days + "d " + hours + "h " + minutes + "m " + seconds + "s")];
    }
}

