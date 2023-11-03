function setCookie(cookieName, cookieValue, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 60 * 1000)); // 유효 기간을 분 단위로 설정

    const expires = "expires=" + date.toUTCString();
    const cookie = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";" + expires + ";path=/";

    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function deleteCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            setCookie(name, cookie.substring(name.length + 1), 0);
        }
    }
}

let loginCheck = new Promise((resolve, reject) => {
    if (!!getCookie('AccessToken')) {
        $.ajax({
            url: "https://" + config.ServerUrl + '/api/auth/check',
            type: 'GET',
            headers: {
                "Authorization": 'Bearer ' + getCookie('AccessToken')
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject();
        })
    } else {
        reject();
    }
})