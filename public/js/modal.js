const reverseAlarm = $('.alarm-reverse > .alarm-button');
const saveBtn = $('.save');

let reverseB = false;
reverseAlarm.click(function (e) {
    if (reverseAlarm.hasClass('toggle')) {
        reverseAlarm.removeClass('toggle');
        reverseB = false;
        $('.alarm-reverse > .alarm-button > .button-margin > .circle-button').html("OFF");
    } else {
        reverseAlarm.addClass('toggle');
        reverseB = true;
        $('.alarm-reverse > .alarm-button > .button-margin > .circle-button').html("ON");
    }
})

saveBtn.click(function () {
    loginCheck.then(() => {
        $.ajax({
            url: "https://" + config.ServerUrl + "/api/user/alarm?on=" + reverseB.toString(),
            type: "GET",
            headers: {
                "Authorization": 'Bearer ' + getCookie('AccessToken')
            }
        }).then(() => {
            $('.modal-container').removeClass('modal-toggle');
        })
    })
})