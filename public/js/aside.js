const accessTime = 2 * 60;
const refreshTime = 24 * 60 * 7;

// aside 에 load
$(document).ready(function () {
    $(".side-bar").load("../../pages/include/aside.html", function () {
        let path = window.location.pathname;
        let page = path.split("/").pop();

        switch (page) {
            case "Speed.html":
                document.querySelector('#speed-btn').classList.add('active');
                break;
            case "Reverse.html":
                document.querySelector('#reverse-btn').classList.add('active');
                break;
            default:
                break;
        }

        $('#speed-btn').on('click', function (e) {
            window.location.href = "Speed.html";
        })

        $('#reverse-btn').on('click', function (e) {
            window.location.href = "Reverse.html";
        })

    //     if (!getCookie('AccessToken')) {
    //         if (!!getCookie('RefreshToken')) {
    //             $.ajax({
    //                 url: ServerURL + "/api/all/login",
    //                 type: 'PATCH',
    //                 contentType: "application/json; charset=UTF-8",
    //                 data: JSON.stringify({
    //                     "refreshToken": `${getCookie('RefreshToken')}`
    //                 }),
    //                 headers: {
    //                     "Authorization": 'Bearer ' + getCookie('RefreshToken')
    //                 }
    //             }).then((res) => {
    //                 setCookie('AccessToken', res.accessToken, accessTime);
    //                 setCookie('RefreshToken', res.refreshToken, refreshTime);
    //                 setCookie('UserID', res.userId, accessTime);
    //                 window.location.reload();
    //             })
    //         }
    //     }
    //
    //     $('#login').click(function (e) {
    //         window.location.href = '';
    //     })
    //
    //     $('#logout').click(function (e) {
    //         $.ajax({
    //             url: ServerURL + '/api/all/login',
    //             type: 'DELETE',
    //             contentType: "application/json; charset=UTF-8",
    //             data: JSON.stringify({
    //                 "refreshToken": `${getCookie('RefreshToken')}`
    //             })
    //         }).then(() => {
    //             deleteCookie('AccessToken');
    //             deleteCookie('RefreshToken');
    //             deleteCookie('UserID');
    //             window.location.reload();
    //         })
    //     })
    //
    //     loginCheck.then((res) => {
    //         $('#login').css('display', 'none');
    //         $('.current-user').css('display', 'inline-block');
    //         $('#current-user-img').attr('src', res.imgUrl);
    //         $('#current-user-name').html(res.name);
    //     }).catch(() => {
    //         $('#login').css('display', 'inline-block');
    //         $('.current-user').css('display', 'none');
    //     })
    });
})
