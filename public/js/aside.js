const accessTime = 2 * 60;
const refreshTime = 24 * 60 * 7;
const modal = $('.modal-container');

// aside 에 load
$(document).ready(function () {
    $(".side-bar").load("../../pages/aside.html", function () {
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

        $('.modal-background').click(function () {
            if (!modal.hasClass('modal-toggle')) {
                modal.addClass('modal-toggle');
                console.log('add');
            } else {
                modal.removeClass('modal-toggle');
                console.log('remove');
            }
        })

        if (!getCookie('AccessToken')) {
            if (!!getCookie('RefreshToken')) {
                $.ajax({
                    url: "https://" + config.ServerUrl + "/api/auth/login",
                    type: 'PATCH',
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        "refreshToken": `${getCookie('RefreshToken')}`
                    }),
                    headers: {
                        "Authorization": 'Bearer ' + getCookie('RefreshToken')
                    }
                }).then((res) => {
                    setCookie('AccessToken', res.accessToken, accessTime);
                    setCookie('RefreshToken', res.refreshToken, refreshTime);
                    setCookie('UserID', res.userId, accessTime);
                    window.location.reload();
                })
            }
        }
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

        loginCheck.then((res) => {
            $('#user-page').css("filter", "filter: invert(26%) sepia(99%) saturate(1769%) hue-rotate(243deg) brightness(86%) contrast(95%)");
            $('#user-page').on('click', function (e) {
                console.log('click');
                if (!modal.hasClass('modal-toggle')) {
                    modal.addClass('modal-toggle');
                    console.log('add');
                } else {
                    modal.removeClass('modal-toggle');
                    console.log('remove');
                }
            })
        }).catch(() => {
            $('#user-page').on('click', function (e) {
                window.location.href = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=014fd6985cda29d0e5fe4263fc3c366b&redirect_uri=https://seoul-aiot-jiozx.run.goorm.site/login.html";
            })
        })
    });
})
