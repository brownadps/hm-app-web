function populate_fields(){
    let x = new Countdown_Timer(new Date("March 9, 2019 19:03:25"));

    let first_interval = setInterval(function(){
        let time_left = x.time_left();
        if(time_left[0]) {
            show_submit(x);
            clearInterval(first_interval);
        } else {
            document.getElementById('shift_timer').innerHTML = 
                `<h3> Time until next shift </h3> ${time_left[1]}`;
        }
    }, 1000);
}

function show_submit(x){
    let next_day = new Date(x.date.getTime() + 60 * 60 * 24 * 1000);
    let next_day_timer = new Countdown_Timer(next_day);
    setInterval(function(){
        let time_left = next_day_timer.time_left();
        if(time_left[0]) {
            console.log('bububub');
        } else {
            document.getElementById('shift_timer').innerHTML = 
                `<h3> Time Left To Submit </h3> ${time_left[1]}`;
            
            
        }
    }, 1000);
}

populate_fields();


//======Image Uploading======//
function setUploader(){
    // bind to the form's submit event
    let upload = document.getElementById("photo_uploader");
    $([upload, upload2]).unbind("submit").bind("submit", function(e){
        e.preventDefault();
        $('#')
        return false;
    });
}

function uploadError(data){
    window.alert("The file type you are uploading is not supported.");
}
function finishedUpload(data){
    window.alert("Image uploaded successfully.");
}